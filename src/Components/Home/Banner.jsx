const Banner = () => {
  return (
    <div
      className="hero min-h-screen -mt-20 "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/z7qVxwH/banner.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold w-fit text-black">I Grow By Helping People In Need</h1>
          <form><input className="p-2 w-56" type="text" />
          <input className="bg-red-600 p-2 text-base font-semibold" type="submit" value=' Search'/></form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
