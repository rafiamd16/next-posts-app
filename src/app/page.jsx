import Link from "next/link";

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="px-4">
          <div className="bg-white mx-auto border shadow-2xl w-[270px] h-[150px] p-7 rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">
              Create Your Post!
            </h1>
            <div className="flex justify-center items-center gap-4">
              <Link
                href="/bad-posts/create"
                className="py-2 px-4 text-white font-medium bg-red-500 hover:bg-red-800 rounded hover:rounded-full"
              >
                BAD
              </Link>
              <Link
                href="/good-posts/create"
                className="py-2 px-4 text-white font-medium bg-green-500 hover:bg-green-800 rounded hover:rounded-full"
              >
                GOOD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
