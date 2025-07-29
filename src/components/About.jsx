export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center transition-colors duration-300"
    >
      <h3 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-10">
        About Us
      </h3>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
          Welcome to <strong className="font-semibold text-pink-700 dark:text-pink-300">Jhulelal Ice Candy</strong> — Manufacturers of Premium Kulfi & Ice Creams.
           <strong></strong>

          <br /><br />
          At Jhulelal Ice Candy, we believe that every bite should bring back memories of childhood summers and sweet moments shared with family and friends. For years, we have been crafting delicious kulfis and ice creams that combine traditional recipes with the finest ingredients.
          <br /><br />
          Founded with a passion for pure taste and quality, Jhulelal Ice Candy has grown from a small local venture to a trusted name in kulfi and ice cream manufacturing. We are proud to serve our community with authentic flavors and consistent quality that keeps our customers coming back for more.
          {/* <br /><br />
          We don’t just plan events — <em>we craft experiences that last a lifetime.</em> */}
        </p>
      </div>
    </section>
  );
}
