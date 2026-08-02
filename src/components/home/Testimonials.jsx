import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Trusted by doctors, healthcare professionals and distributors.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;