"use client";
import ProvidersSection from "../providersection/card";
import HowItWorks from "../howitworks/howItWorks";
import TestimonialSection from "../testimonialpage/testtimonial";
import ContactSection from "../contact/contact";
import Footer from "../footer/footer";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [yearOptions, setYearOptions] = useState([]);
  const [makeOptions, setMakeOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [styleOptions, setStyleOptions] = useState([]);

  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [style, setStyle] = useState("");
  const [zipCode, setZipCode] = useState("");

  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const Url = "http://127.0.0.1:8001/api";
  // console.log(apiUrl);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.post(`${apiUrl}/qoutes/getYears`, config);
        setYearOptions(response.data.data);
      } catch (error) {
        console.error("Error fetching years:", error);
      }
    };
    fetchYears();
  }, [apiUrl]);

  useEffect(() => {
    if (year) {
      const fetchMakes = async () => {
        try {
          const response = await axios.post(
            `${apiUrl}/qoutes/getMakes`,
            { year_id: year },
            config
          );
          setMakeOptions(response.data.data);
        } catch (error) {
          console.error("Error fetching makes:", error);
        }
      };
      fetchMakes();
    } else {
      setMakeOptions([]);
    }
  }, [year]);

  // Fetch Models 
  useEffect(() => {
    if (make) {
      const fetchModels = async () => {
        try {
          const response = await axios.post(
            `${apiUrl}/qoutes/getModels`,
            { make_id: make },
            config
          );
          setModelOptions(response.data.data);
        } catch (error) {
          console.error("Error fetching models:", error);
        }
      };
      fetchModels();
    } else {
      setModelOptions([]);
    }
  }, [make]);

  // Fetch Styles
  useEffect(() => {
    if (model) {
      const fetchStyles = async () => {
        try {
          const response = await axios.post(
            `${apiUrl}/qoutes/getStyles`,
            { model_id: model },
            config
          );
          setStyleOptions(response.data.data);
        } catch (error) {
          console.error("Error fetching styles:", error);
        }
      };
      fetchStyles();
    } else {
      setStyleOptions([]);
    }
  }, [model]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!zipCode || !year || !make || !model || !style) {
      alert("Please fill in all fields.");
      return;
    }

    const requestData = {
      zip_code: zipCode,
      year_id: year,
      make_id: make,
      model_id: model,
      style_id: style,
    };

    try {
      const response = await axios.post(`${Url}/listing`, requestData);

      const data = response.data;

      if (data.valid) {
        router.push(data.url);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing your request.");
    }
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/banner.jpg")' }}
      >
        <header className="flex justify-between p-4 bg-white shadow-lg">
          <div className="flex items-center">
            <img
              src="/logo/main_logo.svg"
              alt="Auto Glass Logo"
              className="h-12"
            />
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-600">
              HOME
            </a>
            <a href="#" className="text-gray-600">
              ABOUT US
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Login
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg p-4">
            <a href="#" className="block text-gray-600 mb-2">
              HOME
            </a>
            <a href="#" className="block text-gray-600 mb-2">
              ABOUT US
            </a>
            <button className="bg-blue-500 text-white w-full px-4 py-2 rounded-full">
              Login
            </button>
          </nav>
        )}

        <section className="flex flex-col items-center justify-center text-center text-white mt-10">
          <h1 className="text-4xl font-bold">
            Get Instant Quotes & Schedule a Visit Now!
          </h1>
          <p className="mt-4">
            Tell Us What You Want & We'll Help You Find What You're Looking For
          </p>

          <div className="mt-8 relative">
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)} 
              className="p-3 rounded-lg shadow-lg border border-gray-300 text-black w-64"
              required
            />
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mt-8 px-4">
            <div className="flex flex-row gap-4 bg-white shadow-md rounded-full px-4 py-3 w-full max-w-5xl items-center justify-center">
              <div className="relative flex items-center w-full max-w-xs">
                <FaCalendarAlt className="absolute left-4 text-gray-400" />
                <select
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setMake("");
                    setModel("");
                    setStyle("");
                  }}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-full text-gray-700 focus:outline-none focus:ring focus:border-indigo-300"
                >
                  <option value="">Year</option>
                  {yearOptions.map((option) => (
                    <option key={option.Value} value={option.Value}>
                      {option.Text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex items-center w-full max-w-xs">
                <select
                  value={make}
                  onChange={(e) => {
                    setMake(e.target.value);
                    setModel("");
                    setStyle("");
                  }}
                  className="block w-full pl-4 pr-4 py-2 border border-gray-300 bg-white rounded-full text-gray-700 focus:outline-none focus:ring focus:border-indigo-300"
                  disabled={!year}
                >
                  <option value="">Make</option>
                  {makeOptions.map((option) => (
                    <option key={option.Value} value={option.Value}>
                      {option.Text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex items-center w-full max-w-xs">
                <select
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    setStyle("");
                  }}
                  className="block w-full pl-4 pr-4 py-2 border border-gray-300 bg-white rounded-full text-gray-700 focus:outline-none focus:ring focus:border-indigo-300"
                  disabled={!make}
                >
                  <option value="">Model</option>
                  {modelOptions.map((option) => (
                    <option key={option.Value} value={option.Value}>
                      {option.Text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex items-center w-full max-w-xs">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="block w-full pl-4 pr-4 py-2 border border-gray-300 bg-white rounded-full text-gray-700 focus:outline-none focus:ring focus:border-indigo-300"
                  disabled={!model}
                >
                  <option value="">Style</option>
                  {styleOptions.map((option) => (
                    <option key={option.Value} value={option.Value}>
                      {option.Text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit" // Submit the form
              className="bg-blue-500 text-white px-6 py-3 rounded-full"
            >
              Get Quotes Now
            </button>
          </div>
        </form>
      </div>

      <ProvidersSection />
      <HowItWorks />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
