import { useEffect, useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";

import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryFilter from "../../components/gallery/GalleryFilter";
import GalleryGrid from "../../components/gallery/GalleryGrid";

import { getGalleryItems } from "../../services/galleryService";

const Gallery = () => {

  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch Gallery

  useEffect(() => {

    const loadGallery = async () => {

      try {

        setLoading(true);
        setError("");

        const data = await getGalleryItems();

        setGalleryItems(data);

      } catch (err) {

        console.error("Gallery Error:", err);

        setError("Unable to load gallery.");

      } finally {

        setLoading(false);

      }

    };

    loadGallery();

  }, []);

  // Categories from backend data

  const categories = useMemo(() => {

    const uniqueCategories = [
      ...new Set(
        galleryItems
          .map((item) => item.category)
          .filter(Boolean)
      ),
    ];

    return [
      {
        name: "All",
      },
      ...uniqueCategories.map((category) => ({
        name: category,
      })),
    ];

  }, [galleryItems]);

  // Filter

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (
    <>
      <GalleryHero />

      <section id="gallery-content" className="bg-slate-50">

        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
                Gallery
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                {activeCategory === "All"
                  ? "Our Moments"
                  : activeCategory}
              </h2>

            </div>

            {!loading && (
              <div className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">

                <span className="font-bold text-blue-700">
                  {filteredItems.length}
                </span>

                <span className="text-gray-500 ml-1">
                  {filteredItems.length === 1
                    ? "Item"
                    : "Items"}
                </span>

              </div>
            )}

          </div>

          <GalleryGrid
            items={filteredItems}
            loading={loading}
            error={error}
            onOpen={setSelectedItem}
          />

        </div>

      </section>

      {/* Image Modal */}

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setSelectedItem(null)}
        >

          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute -top-3 -right-3 z-10 w-11 h-11 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-xl hover:bg-red-50 hover:text-red-600 transition"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl bg-black"
            />

            {/* Details */}

            <div className="bg-white rounded-2xl mt-4 p-5">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedItem.title}
                  </h3>

                  {selectedItem.description && (
                    <p className="text-gray-500 mt-1">
                      {selectedItem.description}
                    </p>
                  )}

                </div>

                {selectedItem.category && (
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                    {selectedItem.category}
                  </span>
                )}

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Gallery;