import masseyImage from "@/assets/trailer.jpg";

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hello Farmer Welcome!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Higher Quality Machines at Fair Price
            </p>
            <div className="pt-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Explore Machines
              </button>
            </div>
          </div>

          {/* Image container */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img
                src={masseyImage}
                alt="Massey Ferguson Tractor"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-green-100 to-white rounded-2xl -rotate-3 scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
