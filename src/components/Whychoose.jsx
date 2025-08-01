import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const allServices = [
  {
    title: "Pure Ingredients",
    description:
      "No artificial taste, only real milk, nuts, fruits, and natural flavors.",
  },
  {
    title: "Hygienic Production",
    description:
      "Manufactured in a clean, quality-controlled facility, ensuring every bite is safe and fresh.",
  },
  {
    title: "Authentic Taste",
    description:
      "Our recipes stay true to traditional flavors, giving you an experience that feels homemade.",
  },
  {
    title: "Local Love",
    description:
      "Rooted in our community, we value every customer and every feedback — your trust drives us to keep innovating.",
  },
  // {
  //   title: "Corporate & Social Event Planning",
  //   description:
  //     "From corporate launches and annual functions to private parties and social events, we provide professional planning, branding, decor, AV setup, stage management, and guest coordination — ensuring your event is smooth, impactful, and memorable for attendees.",
  // },
  // {
  //   title: "Custom Theme Decorations",
  //   description:
  //     "Every celebration deserves a unique vibe. We design and decorate baby showers, anniversaries, engagements, housewarmings, and more with tailor-made themes — from vintage and floral to Bollywood, rustic, or modern minimalist. Tell us your vision, and we’ll bring it to life beautifully.",
  // },
  // {
  //   title: "Complete Event Planning & Management",
  //   description:
  //     "From start to finish, we handle all aspects of your event — logistics, vendor coordination, timelines, and execution — ensuring a seamless and stress-free experience for you and your guests. We have successfully managed over 10,000 events since 1990, setting new standards in the industry.",
  // },
  // {
  //   title: "Customized Thematic Decorations",
  //   description:
  //     "Whether you're dreaming of a royal Rajasthani wedding, a vibrant Bollywood night, or a soft floral baby shower, we bring your theme to life with elegance and attention to detail. Our decor experts create immersive atmospheres with drapes, centerpieces, florals, lighting, and props.",
  // },
  // {
  //   title: "Conceptual Bride & Groom Entries",
  //   description:
  //     "Make your entrance unforgettable! We plan and execute creative bride and groom entries using themes, pyros, lights, dancers, props, music, and more — transforming your grand moment into a magical spectacle that sets the tone for the entire celebration.",
  // },
  // {
  //   title: "Varmala & Stage Themes",
  //   description:
  //     "From romantic floral varmala setups to royal throne-inspired stages, we design beautiful and symbolic decor for the varmala ceremony. We ensure your stage is picture-perfect and aligns with your personal style and event theme.",
  // },
  // {
  //   title: "Artist & Celebrity Management",
  //   description:
  //     "Want a celebrity appearance or folk artist performance? We handle the entire process — from booking, travel, stay, to performance management. Whether it’s a live band, DJ, anchor, or celebrity singer, we ensure quality entertainment that your guests won’t forget.",
  // },
  // {
  //   title: "Entertainment & Experiences",
  //   description:
  //     "From traditional dance troops and live musicians to LED dhol walas, selfie corners, and interactive games — we create engaging experiences that entertain your guests and make your event lively, energetic, and joyful.",
  // },
];

export default function Whychoose() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="services"
      className="py-20 px-6 bg-pink-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <h3 className="text-4xl font-bold text-pink-600 dark:text-pink-400 text-center mb-10">
        Why Choose Us?
      </h3>
      <div className="max-w-5xl mx-auto space-y-4">
        {allServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-lg transition-colors duration-300"
          >
            <button
              onClick={() => toggleDescription(idx)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-pink-900 transition"
            >
              <span className="text-lg font-semibold">{service.title}</span>
              <span className="text-pink-500 dark:text-pink-400 text-xl">
                {activeIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {activeIndex === idx && (
              <div className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-base">
                {service.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
