export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="text-xl mt-4">
        Page Not Found
      </p>

      <a 
        href="/"
        className="mt-6 px-5 py-2 rounded-lg bg-blue-500 text-white"
      >
        Back Home
      </a>
    </div>
  );
}