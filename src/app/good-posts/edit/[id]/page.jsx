import EditGoodForm from "@/components/GoodPost/EditForm";
import { getGoodPostById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPost = async ({ params }) => {
  const { id } = params;

  const goodPost = await getGoodPostById(id);

  if (!goodPost) return notFound();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="max-w-screen-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-5">
            Update Your Post
          </h3>
          <EditGoodForm goodPost={goodPost} />
        </div>
      </div>
    </section>
  );
};

export default EditPost;
