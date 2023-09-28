/* eslint-disable react/prop-types */

const Banner = ({getKeyword}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    getKeyword(e.target.keyword.value);
  };

  return (
    <div
      className="hero min-h-screen -mt-20"
      style={{
        backgroundImage: "url(https://i.ibb.co/z7qVxwH/banner.webp)",
      }}
    >
      <div className="hero-overlay bg-slate-300 bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-4xl text-center font-bold w-fit text-black">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="p-2 text-black rounded-l-lg  w-56"
              name="keyword"
              type="text"
              placeholder="Search here...."
            />
            <input
              className="bg-red-600 rounded-r-lg p-2 pl-2 pr-3 text-base font-semibold"
              type="submit"
              value=" Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
