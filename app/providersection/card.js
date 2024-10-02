import Image from "next/image";

export default function ProvidersSection() {
  const providers = [
    {
      name: "Pinnacle Auto Glass",
      location: "Bayshore, NY",
      reviews: 38,
      stars: 5,
      image: "/provider1.jpg",
    },
    {
      name: "Delta Auto Glass",
      location: "Houston, TX",
      reviews: 203,
      stars: 5,
      image: "/provider2.jpg",
    },
    {
      name: "Quick Repair Auto Glass",
      location: "Orlando, FL",
      reviews: 5,
      stars: 5,
      image: "/provider3.jpg",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Local Auto Glass Replacement Providers Near You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={provider.image}
                alt={provider.name}
                width={400}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{provider.name}</h3>
                <p className="text-gray-500">{provider.location}</p>
                <div className="flex justify-center align-middle items-center ">
                  <div className="flex items-center my-2">
                    {[...Array(provider.stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L17.91 22 12 18.27 6.09 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2">
                      ({provider.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
