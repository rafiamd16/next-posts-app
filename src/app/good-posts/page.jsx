import GoodPostList from "@/components/GoodPost";
import { BASE_API_URL } from "@/lib/constansts";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";

const GoodPosts = async () => {
  const res = await fetch(`${BASE_API_URL}/api/goodpost`, {
    cache: "no-store",
  });
  const goodPostList = await res.json();

  return (
    <>
      <section className="pb-10 pt-32">
        <div className="container">
          <div className="px-4">
            <h3 className="py-4 font-bold text-4xl text-center mb-5">
              Good Post Page
            </h3>
            <div className="flex items-center">
              <Link
                href="/good-posts/create"
                className="py-2 px-6 text-center self-start flex items-center gap-1 text-white font-medium bg-blue-500 hover:bg-blue-700 transition-all rounded shadow"
              >
                <IoAddOutline size={20} />
                Create Post
              </Link>
            </div>
            <GoodPostList goodPostList={goodPostList.reverse()} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GoodPosts;
