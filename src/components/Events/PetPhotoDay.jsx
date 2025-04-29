import { Camera, Users, Share2 } from "lucide-react";

const PetPhotoDay = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-44">
      <div className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <Camera className="text-blue-600 w-8 h-8" />
          <h2 className="text-2xl font-bold text-blue-800">📸 Pet Photo Day</h2>
        </div>

        <p className="text-gray-700 mb-4">
          A fun photoshoot event where people can bring their adopted pets for professional photos.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Users className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-700">Purpose</h4>
              <p className="text-sm text-gray-600">Build community and encourage sharing on social media.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Share2 className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-700">Why Participate?</h4>
              <p className="text-sm text-gray-600">Show off your pets and get memories to cherish forever!</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Camera className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-700">Bonus</h4>
              <p className="text-sm text-gray-600">Get high-quality, professionally edited pet photos for free.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up for Photo Day
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetPhotoDay;
