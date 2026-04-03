export default function Banner() {
  return (
    <div
      className="relative h-80 flex justify-center items-center bg-cover bg-center bg-white px-2 py-4"
      style={{ backgroundImage: `url('/img/banner-1.jpg')` }}
    >
      <div className="absolute inset-0 bg-linear-to-r bg-blue-300/20 via-black/10 to-black/10"></div>
      <div className="relative text-white text-center  max-w-5xl">
        <h1 className="text-5xl md:text-5xl font-bold text-gray-100 w-full">
          <span className="text-yellow-500">Join us</span> and Become a
        </h1>
        <p className="mb-6 mt-4 text-lg md:text-3xl text-gray-200">
          <span className="text-yellow-500">Professional</span> Futsal Player
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
          Join Academy
        </button>
      </div>
    </div>
  );
}
