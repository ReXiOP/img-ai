import React from "react";

export default function SkeletonLoader({ numImages = 3 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {/* Render skeleton loaders based on numImages */}
      {[...Array(numImages)].map((_, idx) => (
        <div
          key={idx}
          className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-300 animate-pulse"
        >
          {/* Skeleton Card */}
          <div className="w-full h-64 bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse"></div>

          {/* Optional shimmer effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gray-300 opacity-50 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
