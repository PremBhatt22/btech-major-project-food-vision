import React from 'react'
type Confidence = {
  label: string;
  confidence: number;
};

export type ResultProps = {
  data: {
    label: string;
    confidences: Confidence[];
  };
};

export const Results = ({data}: ResultProps) => {
    // console.log("prem",data)
  // Sort by confidence (highest first)
  const confidenceList = data.confidences;
  const sorted = confidenceList.sort((a, b) => b.confidence - a.confidence);
  const top = sorted[0];
  const others = sorted.slice(1);
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        🍽️ Most Likely Dish
      </h2>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-green-600 capitalize">
          {top.label.replaceAll("_", " ")}
        </p>
        <p className="text-sm text-gray-500">
          Confidence: {(top.confidence * 100).toFixed(1)}%
        </p>
      </div>

      {others.length > 0 && (
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-1 text-center">
            Other possible predictions:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {others.map((item) => (
              <li key={item.label} className="flex justify-between">
                <span className="capitalize">{item.label.replaceAll("_", " ")}</span>
                <span>{(item.confidence * 100).toFixed(1)}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
