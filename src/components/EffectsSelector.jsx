export default function EffectsSelector({ effects, setEffects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Color Style */}
      <div className="flex flex-col gap-2">
        <label htmlFor="color" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Color Style
        </label>
        <select
          id="color"
          value={effects.color}
          onChange={(e) => setEffects({ ...effects, color: e.target.value })}
          className="w-full py-3 px-4 text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <option value="vibrant" className="dark:bg-gray-800">Vibrant</option>
          <option value="pastel" className="dark:bg-gray-800">Pastel</option>
        </select>
      </div>

      {/* Lighting */}
      <div className="flex flex-col gap-2">
        <label htmlFor="lightning" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Lighting
        </label>
        <select
          id="lightning"
          value={effects.lightning}
          onChange={(e) => setEffects({ ...effects, lightning: e.target.value })}
          className="w-full py-3 px-4 text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <option value="golden-hour" className="dark:bg-gray-800">Golden Hour</option>
          <option value="studio" className="dark:bg-gray-800">Studio</option>
        </select>
      </div>

      {/* Framing */}
      <div className="flex flex-col gap-2">
        <label htmlFor="framing" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Framing
        </label>
        <select
          id="framing"
          value={effects.framing}
          onChange={(e) => setEffects({ ...effects, framing: e.target.value })}
          className="w-full py-3 px-4 text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <option value="panoramic" className="dark:bg-gray-800">Panoramic</option>
          <option value="close-up" className="dark:bg-gray-800">Close-up</option>
        </select>
      </div>
    </div>
  );
}
