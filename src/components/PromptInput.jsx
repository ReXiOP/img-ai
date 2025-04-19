import { Sparkles } from "lucide-react"; // optional icon library

export default function PromptInput({ prompt, setPrompt }) {
  return (
    <div className="relative w-full">
      <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Enter your image prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full pl-10 pr-4 py-3 text-base rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-400"
      />
    </div>
  );
}
