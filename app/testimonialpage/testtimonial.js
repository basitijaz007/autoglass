const TestimonialSection = () => {
  const testimonials = [
    {
      image: "/images/s1.png", 
      name: "Joe Conde",
      location: "Mathwah, NJ",
      text: "Excellent same day service, half the price of safelite. Would definitely recommend.",
      photo: "/images/s1.png", 
    },
    {
      image: "/images/s2.png",
      name: "Paula",
      location: "Houston, TX",
      text: "Great service. Very quick and reliable. Would highly recommend. Good value...",
      photo: "/images/s1.png",
    },
    {
      image: "/images/s3.png",
      name: "Justin T Jolley",
      location: "Altamonte Springs, Florida",
      text: "Amazing FAST and Sameday Service! Can't believe how reasonable the prices are...",
      photo: "/images/s1.png",
    },
    {
        image: "/images/s3.png",
        name: "Justin T Jolley",
        location: "Altamonte Springs, Florida",
        text: "Amazing FAST and Sameday Service! Can't believe how reasonable the prices are...",
        photo: "/images/s1.png",
      },
  ];
  return (
    <>
      <section style={{ backgroundImage: `url("/images/bg-blue.png")` }}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Laptop Image with Reviews */}
          <div className="relative">
            <img
              src="/images/laptop-2.png"
              alt="Laptop with reviews"
              className="w-full m-7"
            />
          </div>

          {/* About Auto Glass Quote Section */}
          <div className="px-6 md:px-0">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              About Auto Glass Quote
            </h2>
            <p className="text-lg mb-4 text-white">
              We’re dedicated to helping you find auto glass replacements near
              you quickly with a nationwide list of certified auto glass shops.
            </p>
            <p className="text-lg text-white mb-4">
              You get an accurate quote instantly. Our dedication to quality
              dictates that we verify each provider to ensure our quality
              standards.
            </p>
            <div className="flex items-center mt-6"></div>
            <button className="mt-6 px-6 py-2 bg-white rounded-lg hover:bg-gray-200">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Customer Reviews & Testimonials
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it – see what our customers have to say
            about us!
          </p>
        </div>

        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timeline Line */}
          <div className="absolute hidden md:block w-1 bg-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Left Side (Images) */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              } flex flex-col items-center space-y-4`}
            >
              {/* Image Section */}
              <div className="w-full">
                <img
                  src={testimonial.image}
                  alt="Customer"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* Review Text Section */}
              <div
                className={`w-full ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                } bg-white shadow-lg p-6 rounded-lg relative`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                {/* Dot indicator for the timeline */}
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 md:hidden"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
