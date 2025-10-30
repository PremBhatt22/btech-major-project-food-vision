"use client";

import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Results } from "./results";

// --- Helper Icon Components (Unchanged) ---
const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const RotateCcwIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 2v6h6" />
    <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
  </svg>
);

// --- Helper Function to convert Base64 Data URL to Blob ---
function dataURLtoBlob(dataurl: string): Blob {
  const arr = dataurl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  if (!mimeMatch) {
    throw new Error("Invalid data URL");
  }
  const mime = mimeMatch[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// --- Main App Component ---
export default function CameraClickPage() {
  // State management for camera
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);

  // NEW State management for analysis
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<any | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  // Refs for DOM elements
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Function to open the camera
  const openCamera = useCallback(async () => {
    // Clear previous state for both camera and analysis
    setCapturedImage(null);
    setPrediction(null);
    setAnalysisError(null);
    setError(null);
    setIsLoading(true);
    setIsCameraReady(false);

    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          setIsCameraReady(true);
        };
      }
    } catch (err) {
      console.error("Camera access error:", err);
      let errorMessage = "Could not access the camera. ";
      if (err instanceof Error) {
        if (
          err.name === "NotAllowedError" ||
          err.name === "PermissionDeniedError"
        ) {
          errorMessage +=
            "Please grant camera permissions in your browser settings.";
        } else if (
          err.name === "NotFoundError" ||
          err.name === "DevicesNotFoundError"
        ) {
          errorMessage += "No camera found on this device.";
        } else {
          errorMessage += "An unexpected error occurred.";
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [stream]);

  // Function to capture the photo
  const capturePhoto = useCallback(() => {
    setError(null);
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL("image/jpeg");
        setCapturedImage(imageDataUrl);
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          setStream(null);
        }
      }
    }
  }, [stream]);

  // --- UPDATED Function to handle the "Analyze" button click ---
  const handleAnalyze = async () => {
    if (!capturedImage) return;

    setIsAnalyzing(true);
    setAnalysisError(null);
    setPrediction(null);

    try {
      // Dynamically import the Gradio client only when needed (client-side)
      const { Client } = await import("@gradio/client");

      // Convert the base64 image to a Blob
      const imageBlob = dataURLtoBlob(capturedImage);

      // Connect to your Gradio Space
      const client = await Client.connect("Lakshaya13/foodvision");

      // Send the image to the model's `/predict` endpoint
      const result = await client.predict("/predict", {
        img: imageBlob,
      });

      // console.log("Gradio API Result:", result.data);
      // Assuming the model returns data, set it to the state
      setPrediction(result.data);
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysisError("Failed to analyze the image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Effect to clean up the stream when the component unmounts
  React.useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const router = useRouter();
  const handleDetailedView = (prediction: Record<string, string>[]) => {
    const name = prediction[0]?.label;
    router.push(`/details/${encodeURIComponent(name)}`);
    // router.push(`/details?name=${encodeURIComponent(prediction.name)}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-lg mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-green-400">Food Vision</h1>
          <p className="text-gray-400 mt-2">
            Capture a photo of your food to get its nutritional information.
          </p>
        </div>

        <div className="relative aspect-video bg-gray-900/50 flex items-center justify-center">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-red-400 z-10">
              {error}
            </div>
          )}
          {capturedImage ? (
            <Image
              src={capturedImage}
              alt="Captured food item"
              width={600}
              height={400}
              className="object-contain w-full h-full"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-contain transition-opacity duration-500 ${
                isCameraReady ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          <canvas ref={canvasRef} className="hidden"></canvas>
        </div>

        <div className="p-6 bg-gray-800/50">
          {capturedImage ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openCamera}
                disabled={isAnalyzing}
                className="w-full flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcwIcon className="w-5 h-5" />
                Retake
              </button>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZapIcon className="w-5 h-5" />
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </button>
            </div>
          ) : stream ? (
            <button
              onClick={capturePhoto}
              disabled={!isCameraReady}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105"
            >
              <CameraIcon className="w-6 h-6" />
              Capture Photo
            </button>
          ) : (
            <button
              onClick={openCamera}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:bg-gray-500"
            >
              {isLoading ? "Starting Camera..." : "Open Camera"}
            </button>
          )}
        </div>

        {/* --- NEW: Results Display Area --- */}
        {(prediction || analysisError) && (
          <div className="p-6 border-t border-gray-700">
            <h2 className="text-xl font-semibold mb-3 text-center text-gray-300">
              Analysis Result
            </h2>
            {analysisError && (
              <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
                <p>{analysisError}</p>
              </div>
            )}
            {prediction && (
              <div className="bg-gray-900/50 p-4 rounded-lg">
                {/* This part needs to be customized based on your actual API response structure */}
                
                {/* <pre className="text-sm text-green-300 whitespace-pre-wrap break-all">
                  <code>{JSON.stringify(prediction, null, 2)}</code>
                </pre> */}
                <Results data={prediction[0]} />
              </div>
            )}
            {prediction && (
              <button
              onClick={() => handleDetailedView(prediction)}
              className="w-full flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                See Detailed Results here
              </button>
            )}
          </div>
        )}
      </div>
      <footer className="text-center text-gray-500 mt-8 text-sm">
        <p>B.Tech Project | Food Recognition App</p>
      </footer>
    </div>
  );
}
