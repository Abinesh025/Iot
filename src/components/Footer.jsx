import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-gray-900 text-gray-300">

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-600 pb-6">

        {/* College Info */}
        <div className="md:max-w-96 text-center md:text-left">
          <p className="mt-2 text-xl text-white font-bold">
            E.G.S Pillay Engineering College
          </p>

          <p className="text-sm mt-2">
            Autonomous Institution | Affiliated to Anna University
          </p>

          <p className="text-sm">
            Accredited by NBA & NAAC with Grade "A++"
          </p>

          <p className="text-sm mt-2">
            Nagapattinam, Tamil Nadu - 611002
          </p>
        </div>

        {/* Right Sections */}
        <div className="flex-1 flex flex-col sm:flex-row sm:flex-wrap items-start md:justify-end gap-8 sm:gap-10 md:gap-16 lg:gap-20 text-center sm:text-left">

          {/* Components */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Components</h2>

            <ul className="text-sm space-y-2">
              <li>
                <a href="/tutorial/arduino" className="hover:text-white transition">
                  Arduino
                </a>
              </li>

              <li>
                <a href="/tutorial/raspberry-pi" className="hover:text-white transition">
                  Raspberry Pi
                </a>
              </li>

              <li>
                <a href="/tutorial/esp32" className="hover:text-white transition">
                  ESP32
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Social Links</h2>

            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-4 text-white">Contact</h2>

            <div className="text-sm space-y-2">

              <p className="font-semibold text-white">
                R. Ramanan M.E., (Ph.D)
              </p>

              <p>
                Project Associate - EGS Pillay Group of Institutions
              </p>

              <p>
                Assistant Professor | Department of EEE
              </p>

              <p>
                Domains: IoT | Artificial Intelligence | Robotics | Automation
              </p>

              <p>
                Focus: Student Project Mentoring | Research & Innovation
              </p>

              <p>
                Nagapattinam, Tamil Nadu - 611002
              </p>

              <p>
                 +91 73733 36959
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-400">
        &copy; EGS Pillay Group of Institutions. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;