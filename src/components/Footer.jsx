const Footer = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 relative bottom-0 left-0 right-0">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-white text-[11px] sm:text-sm">
            Created by{" "}
            <span className="text-sky-500 font-bold">Rafi Ahmad</span>, using{" "}
            <span className="text-sky-500 font-bold">Next.js</span>
          </p>
          <p className="text-white text-[10px] sm:text-xs">
            © 2024 Post App. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
