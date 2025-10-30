"use client";

import React, { useEffect, useState } from "react";
import { FoodItem } from "../data/items-database";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

type DetailedViewProps = {
  name: string;
  data: FoodItem;
};

const DetailedViewLocalDataComponent = ({ name, data }: DetailedViewProps) => {
  const {
    imageUrl,
    description,
    nutrition,
    is_healthy_percentage,
    recommended_daily_intake_qty,
  } = data;
  const [image, setData] = useState<{ image: string } | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      try {
        const wikiResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            name
          )}`
        );

        // const summary = wikiResponse.data.extract || "No summary found.";
        const image =
          wikiResponse.data.thumbnail?.source ||
          `https://source.unsplash.com/600x400/?${encodeURIComponent(name)}`;

        setData({ image });
      } catch (error) {
        console.error(error);
        setData({
          image: `https://source.unsplash.com/600x400/?${encodeURIComponent(
            name
          )}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading || !image || !image.image)
    return (
      <div className="flex justify-center items-center h-64 bg-gray-900">
        <p className="text-lg text-gray-400 animate-pulse">Loading...</p>
      </div>
    );
  return (
    <>
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto mt-8 border border-gray-100">
        {/* Image Section */}
        <div className="h-56 overflow-hidden rounded-xl mb-4 flex justify-center w-full">
          {imageUrl ? (
            <Image
              src={image?.image}
              alt={name ?? "food item image"}
              height={100}
              width={150}
              className="w-fit h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 italic">
              No image available
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 capitalize mb-2">
          {data.title.replaceAll("_", " ")}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center mb-4">
          {description || "No description available for this dish yet."}
        </p>

        {/* Nutrition Info */}
        <div className="w-full bg-gray-50 rounded-xl p-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Nutrition Facts (per serving)
          </h2>
          {nutrition ? (
            <ul className="text-sm text-gray-700 grid grid-cols-2 gap-y-1">
              <li>🥩 Protein: {nutrition.protein_g ?? "—"} g</li>
              <li>🍬 Sugar: {nutrition.sugar_g ?? "—"} g</li>
              <li>🍞 Carbs: {nutrition.carbs_g ?? "—"} g</li>
              <li>🧈 Fats: {nutrition.fats_g ?? "—"} g</li>
            </ul>
          ) : (
            <p className="text-gray-500 italic">Nutrition data unavailable.</p>
          )}
        </div>

        {/* Health Score */}
        <div className="w-full flex flex-col items-center mb-2">
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Healthiness Score
          </h3>
          <div className="w-3/4 bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${is_healthy_percentage ?? 0}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {is_healthy_percentage ? `${is_healthy_percentage}%` : "Not rated"}
          </p>
        </div>

        {/* Recommended Intake */}
        {recommended_daily_intake_qty && (
          <p className="text-sm text-gray-600 mt-2">
            Recommended Daily Intake:{" "}
            <span className="font-medium text-gray-800">
              {recommended_daily_intake_qty}
            </span>
          </p>
        )}
      </div>
      <div className="text-center">
        <button className="h-10 w-50 rounded-xl bg-white text-black m-2">
          <Link href={"/"}> Predict more images</Link>
        </button>
      </div>
    </>
  );
};

export { DetailedViewLocalDataComponent };
