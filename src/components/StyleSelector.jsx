export default function StyleSelector({ style, setStyle }) {
  return (
    <select
      className="select w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500"
      value={style}
      onChange={(e) => setStyle(e.target.value)}
    >
      <option value="digital-art" className="dark:bg-gray-800 dark:text-gray-300">Digital Art</option>
      <option value="photo" className="dark:bg-gray-800 dark:text-gray-300">Photo</option>
      <option value="vector" className="dark:bg-gray-800 dark:text-gray-300">Vector</option>
    </select>
  );
}
