import EditBadForm from "@/components/BadPost/EditForm";
import { getBadPostById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPost = async ({ params }) => {
  const { id } = params;

  const badPost = await getBadPostById(id);

  if (!badPost) return notFound();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="max-w-screen-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-5">
            Update Your Post
          </h3>
          <EditBadForm badPost={badPost} />
        </div>
      </div>
    </section>
  );
};

export default EditPost;
