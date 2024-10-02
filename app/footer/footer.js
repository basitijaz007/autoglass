export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo Section */}
          <img src="/logo/main_logo.svg" alt="AutoGlass Quote Logo" className="h-12" />
  
          {/* Navigation Links */}
          <nav className="flex space-x-4 text-gray-500 text-lg">
            <a href="/" className="hover:text-gray-800">Home</a>
            <span>|</span>
            <a href="/about" className="hover:text-gray-800">About us</a>
          </nav>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm">
          © Copyright 2024 Autoglassquote, LLC All Rights Reserved
        </div>
      </footer>
    );
  }
  