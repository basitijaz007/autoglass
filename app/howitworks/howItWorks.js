
const HowItWorks = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-semibold mb-4">How does it work</h2>
      <p className="text-lg mb-8">
        Replacing any type of car glass involves a simple three-step process!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
        <img src="/images/pic-1.png" alt="" />
          <h3 className="text-xl font-semibold mb-2">Tell Us About Your Car</h3>
          <p className="text-center mb-4">
            Tell us more about your car model & style; 2 door, 4-door, coupe, or
            any other.
          </p>
          <div className="text-blue-500 font-semibold text-2xl">1</div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
        <img src="/images/pic-2.png" alt="" />

          <h3 className="text-xl font-semibold mb-2">Get an Instant Quote</h3>
          <p className="text-center mb-4">
            Get a quote for auto glass replacement instantly by clicking a
            button!
          </p>
          <div className="text-blue-500 font-semibold text-2xl">2</div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
        <img src="/images/pic-3.png" alt="" />

          <h3 className="text-xl font-semibold mb-2">Set a Schedule</h3>
          <p className="text-center mb-4">
            Choose from our local glass companies and set an appointment 24/7.
          </p>
          <div className="text-blue-500 font-semibold text-2xl w-5 h-5 rounded">3</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
