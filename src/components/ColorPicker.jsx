import { useEffect } from 'react';

export default function ColorPicker({ colors, setColors }) {
  useEffect(() => {
    // Apply dark mode class to the body
    document.body.classList.add('dark');
  }, []);

  const updateColor = (index, value) => {
    const newColors = [...colors];
    newColors[index].color = value;
    setColors(newColors);
  };

  const updateWeight = (index, value) => {
    const newWeight = parseFloat(value);
    if (!isNaN(newWeight) && newWeight >= 0 && newWeight <= 1) {
      const newColors = [...colors];
      newColors[index].weight = newWeight;
      setColors(newColors);
    } else {
      // Reset weight if invalid
      const newColors = [...colors];
      newColors[index].weight = 0;
      setColors(newColors);
    }
  };

  // Dark theme color styles
  const themeColors = {
    background: 'bg-gray-800',
    text: 'text-gray-200',
    label: 'text-gray-400',
    inputBorder: 'border-gray-600',
    sliderBackground: 'bg-indigo-600',
  };

  return (
    <div className={`${themeColors.background} flex flex-col gap-6`}>
      {colors.map((col, idx) => (
        <div
          key={idx}
          className={`${themeColors.background} ${themeColors.text} flex items-center gap-6 p-4 rounded-lg shadow-md border ${themeColors.inputBorder} hover:${themeColors.background} transition-colors duration-300`}
        >
          {/* Color Picker */}
          <div className="flex items-center gap-3">
            <label className={`${themeColors.label} text-lg font-semibold`}>
              🎨 Color {idx + 1}
            </label>
            <input
              type="color"
              value={col.color}
              onChange={(e) => updateColor(idx, e.target.value)}
              className="w-12 h-12 rounded-full border-2 focus:outline-none hover:border-indigo-500 transition-all"
              title="Pick a color"
            />
            <div
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: col.color }}
              title={`Current color: ${col.color}`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Color Intensity</label>
            <div className="flex items-center gap-2">
              <span className={`${themeColors.text} font-medium`}>
                {(col.weight * 100).toFixed(0)}%
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={col.weight}
                onChange={(e) => updateWeight(idx, e.target.value)}
                className={`w-32 h-2 ${themeColors.sliderBackground} rounded-full appearance-none`}
                title="Adjust the color intensity"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
