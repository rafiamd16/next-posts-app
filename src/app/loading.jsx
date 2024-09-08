import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <Image
        width={140}
        height={140}
        src="/img/loading.jpg"
        alt="foto"
        className="shadow-2xl custom-shadow rounded-full object-cover object-center animate-bounce"
      />
      <h1 className="text-2xl md:text-4xl font-bold ">Loading...</h1>
    </div>
  );
};

export default Loading;
