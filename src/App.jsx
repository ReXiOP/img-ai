import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PromptInput from "./components/PromptInput";
import StyleSelector from "./components/StyleSelector";
import EffectsSelector from "./components/EffectsSelector";
import ColorPicker from "./components/ColorPicker";
import ImageGallery from "./components/ImageGallery";
import SkeletonLoader from "./components/SkeletonLoader";
import DarkModeToggle from "./components/DarkModeToggle";
import { generateImage } from "./api/generateImage";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("digital-art");
  const [effects, setEffects] = useState({
    color: "vibrant",
    lightning: "golden-hour",
    framing: "panoramic",
  });
  const [colors, setColors] = useState([
    { color: "#FFAA33", weight: 0.8 },
    { color: "#3344FF", weight: 0.5 },
  ]);
  const [numImages, setNumImages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");

    const payload = {
      prompt,
      negative_prompt:
        "blurry, low-res, grayscale, human, people, animals, cartoon",
      guidance_scale: 1.5,
      seed: 12345,
      num_images: numImages,
      image: { size: "square_1_1" },
      styling: { style, effects, colors },
      filter_nsfw: true,
    };

    try {
      const data = await generateImage(payload);
      setImages(data.data || []);
    } catch (e) {
      console.error(e.message);
      setError("Something went wrong while generating the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Image Generator | Create Stunning Images Instantly</title>
        <meta
          name="description"
          content="Generate high-quality AI-powered images using advanced prompts and styling with our free image generator tool."
        />
        <meta
          name="keywords"
          content="AI Image Generator, Freepik AI, image generation, generate images with prompts, AI art"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Muhammad Sajid" />
        <meta property="og:title" content="AI Image Generator" />
        <meta
          property="og:description"
          content="Generate stunning AI images using Freepik API and advanced styling options."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={images[0]?.url || "https://yourdomain.com/preview.jpg"}
        />
        <meta property="og:url" content={window.location.href} />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-black p-6 md:p-10 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-center w-full">🎨 AI Image Generator</h1>
            <div className="absolute right-6 top-6">
              <DarkModeToggle toggleDarkMode={toggleDarkMode} />
            </div>
          </div>

          {/* Rest of your app */}
          <section
            aria-label="Image Generation Settings"
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 grid gap-6 mb-12 transition-colors duration-300"
          >
            <PromptInput prompt={prompt} setPrompt={setPrompt} />
            <StyleSelector style={style} setStyle={setStyle} />
            <EffectsSelector effects={effects} setEffects={setEffects} />
            <ColorPicker colors={colors} setColors={setColors} />

            <div>
              {/* Number of Images Input */}
              <div className="flex items-center gap-6 p-4">
                <label htmlFor="numImages" className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Number of Images
                </label>
                <input
                  id="numImages"
                  type="number"
                  min="1"
                  max="4"
                  value={numImages}
                  onChange={(e) => setNumImages(Math.max(1, Math.min(4, Number(e.target.value))))}
                  className="w-32 py-3 px-5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-500 shadow-lg transition-all duration-300 ease-in-out hover:border-blue-400 hover:shadow-xl focus:outline-none"
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm font-medium text-center">{error}</div>}

            <button
              className="w-full mt-2 py-3 px-6 rounded-xl bg-indigo-600 text-white text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-indigo-700 dark:text-gray-200 dark:focus:ring-blue-400 transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
            >
              {loading ? (
                <span className="loading loading-spinner text-white" />
              ) : (
                `Generate ${numImages} Image${numImages > 1 ? "s" : ""}`
              )}
            </button>
          </section>

          {loading ? (
            <SkeletonLoader numImages={numImages} />
          ) : (
            images.length > 0 && <ImageGallery images={images} />
          )}
        </div>
      </main>
    </>
  );
}
