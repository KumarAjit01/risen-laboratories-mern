import {
  FaLayerGroup,
  FaTablets,
  FaCapsules,
  FaFlask,
  FaSyringe,
} from "react-icons/fa";

const ProductFilter = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories = [
    {
      name: "All",
      icon: FaLayerGroup,
    },
    {
      name: "Tablets",
      icon: FaTablets,
    },
    {
      name: "Capsules",
      icon: FaCapsules,
    },
    {
      name: "Syrups",
      icon: FaFlask,
    },
    {
      name: "Nutraceuticals",
      icon: FaCapsules,
    },
    {
      name: "Injection",
      icon: FaSyringe,
    },
  ];

  return (
    <section className="bg-white py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex justify-center">

          <div className="flex gap-3 overflow-x-auto pb-2 max-w-full">

            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    onCategoryChange(category.name)
                  }
                  className={`
                    flex items-center gap-2
                    px-6 py-3
                    rounded-full
                    border
                    whitespace-nowrap
                    font-semibold
                    text-sm
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-blue-700 text-white border-blue-700 shadow-lg shadow-blue-700/25"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50"
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

export default ProductFilter;