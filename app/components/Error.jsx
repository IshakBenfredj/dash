export default function Error({ error }) {
  return (
    <div 
    className="mt-20 m-auto w-1/3 bg-red-300 text-center p-3 text-red-700 border-[1px] border-red-800 rounded-md"
    >
      {error}
    </div>
  );
}