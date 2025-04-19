export default function ImageCard({ img, index }) {
  const src = `data:image/png;base64,${img.base64}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `generated-image-${index + 1}.png`;
    link.click();
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition hover:shadow-2xl hover:scale-[1.01] duration-200">
      <img
        src={src}
        alt={`Generated ${index}`}
        className="w-full h-auto object-cover"
      />

      {/* Download Button - appears on hover */}
      <button
        onClick={handleDownload}
        className="absolute bottom-3 right-3 bg-white text-sm px-4 py-2 rounded-full shadow-md text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition duration-300"
      >
        Download
      </button>
    </div>
  );
}
