const Gallery = () => {
  return (
    <section className="pt-36 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-center text-5xl font-bold text-blue-700">
          Gallery
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Company Gallery
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[1,2,3,4,5,6].map((item)=>(
            <div
              key={item}
              className="h-72 rounded-3xl bg-slate-200 flex items-center justify-center text-2xl font-bold"
            >
              Image {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;