import React from "react";
import { Heart } from "lucide-react";

const FooterChinese = () => {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1 right-4 w-16 h-16 bg-yellow-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1 left-4 w-20 h-20 bg-yellow-300/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-400/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 text-center">
        {/* Main Content */}
        <div className="space-y-0">
          {/* Copyright */}
          <p className="text-sm text-green-100">
            © 2016-{new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              和谐文化基金会
            </span>
            。版权所有。
          </p>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600"></div>
    </footer>
  );
};

export default FooterChinese;
