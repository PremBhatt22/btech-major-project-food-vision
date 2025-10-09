"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

type NutritionData = {
  summary: string;
  image: string;
};

export const DetailedViewComponent = ({ name }: { name: string | null }) => {
  const [data, setData] = useState<NutritionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      try {
        const wikiResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
        );

        const summary = wikiResponse.data.extract || "No summary found.";
        const image = wikiResponse.data.thumbnail?.source ||
                      `https://source.unsplash.com/600x400/?${encodeURIComponent(name)}`;

        setData({ summary, image });
      } catch (error) {
        console.error(error);
        setData({
          summary: "Could not fetch data.",
          image: `https://source.unsplash.com/600x400/?${encodeURIComponent(name)}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 bg-gray-900">
        <p className="text-lg text-gray-400 animate-pulse">Loading...</p>
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center h-64 bg-gray-900">
        <p className="text-lg text-red-500">No data available</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex justify-center">
      <div className="max-w-3xl w-full p-6 bg-gray-800 shadow-xl rounded-xl mt-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-400">{name}</h1>
        <Image
          src={data.image}
          alt={name ?? "food item image"}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6 border border-gray-700"
        />
        <p className="text-gray-300 text-lg leading-relaxed">{data.summary}</p>
      </div>
    </div>
  );
};
