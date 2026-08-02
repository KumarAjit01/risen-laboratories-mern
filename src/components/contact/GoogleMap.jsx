const GoogleMap = () => {
  return (
    <section className="pb-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Visit Our Office
          </h2>

          <p className="mt-5 text-gray-600">
            Our registered office location on Google Maps.
          </p>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="RISEN Laboratories Location"
            src="https://www.google.com/maps?q=Green+Park+New+Delhi&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default GoogleMap;