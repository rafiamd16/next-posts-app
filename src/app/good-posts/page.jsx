import GoodPostList from "@/components/GoodPost";
import axios from "axios";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

const GoodPosts = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/goodpost`,
    {
      cache: "no-store",
    }
  );
  const goodPostList = res.data.reverse();

  return (
    <>
      <section className="pb-10 pt-32">
        <div className="container">
          <div className="px-4">
            <h3 className="py-4 font-bold text-4xl text-center mb-5">
              Post Page
            </h3>
            <div className="flex justify-between items-center">
              <Link
                href="/good-posts/create"
                className="py-2 px-6 flex items-center gap-1 text-white font-medium bg-blue-500 hover:bg-blue-700 transition-all rounded shadow"
              >
                <IoAddOutline size={20} />
                Create Post
              </Link>
              <Link
                href="https://next-portfolio-sandiamelani.vercel.app"
                className="py-2 px-6 text-white font-medium bg-blue-500 hover:bg-blue-700 transition-all rounded-full animate-bounce shadow"
                target="_blank"
              >
                Other Site
              </Link>
            </div>
            <GoodPostList goodPostList={goodPostList} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodPosts;
