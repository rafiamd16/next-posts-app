import CreateGoodForm from "@/components/GoodPost/CreateForm";

const Create = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="max-w-screen-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-5">
            Create Your Post
          </h3>
          <CreateGoodForm />
        </div>
      </div>
    </section>
  );
};

export default Create;
