import PropTypes from 'prop-types';
import ImageCard from "./ImageCard";

export default function ImageGallery({ images }) {
  // Conditionally render a message if no images are passed
  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No images to display</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Loop through images and display ImageCard */}
      {images.map((img, idx) => (
        <ImageCard key={idx} img={img} index={idx} />
      ))}
    </div>
  );
}

// PropTypes to ensure the expected structure of the props
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      base64: PropTypes.string.isRequired, // Example image data
    })
  ).isRequired,
};
