import {
  FaLayerGroup,
  FaImages,
  FaTag,
} from "react-icons/fa";

const GalleryFilter = ({
  categories = [],
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <section className="bg-white border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

        <div className="flex justify-center overflow-x-auto">

          <div className="flex gap-3 min-w-max">

            {categories.map((category) => {

              const isActive =
                activeCategory === category.name;

              // API categories me icon nahi hoga,
              // isliye safe fallback icon use karenge.
              const Icon =
                category.icon ||
                (category.name === "All"
                  ? FaLayerGroup
                  : FaTag);

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    onCategoryChange(category.name)
                  }
                  className={`
                    flex items-center gap-2
                    px-5 py-3
                    rounded-full
                    border
                    text-sm
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-blue-700 text-white border-blue-700 shadow-lg shadow-blue-700/20"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                    }
                  `}
                >
                  <Icon className="text-sm" />

                  {category.name}
                </button>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default GalleryFilter;