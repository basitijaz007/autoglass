export default function ContactSection() {
    return (
      <div className="text-white py-16 px-4 flex flex-col items-center justify-center" style={{ backgroundImage: `url("/images/bg-blue.png")` }}>
        <h2 className="text-4xl font-bold mb-4">Have Any Questions?</h2>
        <p className="text-lg mb-8 text-center max-w-2xl">
          We urge you to get in touch and are just an email away! Write to us to learn more about Auto Glass Quote and our services, or simply have something to say – we’re a friendly bunch!
        </p>
        <a
          href="mailto:help@autoglassquote.com"
          className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-md flex items-center space-x-2"
        >
          <span>HELP@AUTOGLASSQUOTE.COM</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12H8m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </a>
      </div>
    );
  }
  