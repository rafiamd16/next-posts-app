import BadPostList from "@/components/BadPost";
import axios from "axios";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

const BadPosts = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/badpost`,
    {
      cache: "no-store",
    }
  );
  const badPostList = res.data.reverse();

  return (
    <>
      <section className="pb-10 pt-32">
        <div className="container">
          <div className="px-4">
            <h3 className="py-4 font-bold text-4xl text-center mb-5">
              Bad Post Page
            </h3>
            <div className="flex justify-between items-center">
              <Link
                href="/bad-posts/create"
                className="py-2 px-6 flex items-center gap-1 text-white font-medium bg-blue-500 hover:bg-blue-700 transition-all rounded shadow"
              >
                <IoAddOutline size={20} />
                Create Post
              </Link>
            </div>
            <BadPostList badPostList={badPostList} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BadPosts;
