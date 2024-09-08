import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-3xl md:text-5xl font-bold">404 | PAGE NOT FOUND</h1>
      <Link
        href="/"
        className="py-2 px-6 text-white font-medium bg-blue-500 hover:bg-blue-700 transition-all rounded"
      >
        Kembali
      </Link>
    </div>
  );
};

export default NotFound;
