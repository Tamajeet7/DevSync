import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Globe } from "lucide-react";

import logo from "../../../assets/logo/devsync-icon.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#090E17]">

      <div
        className="mx-auto max-w-[1700px]"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >

        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-20 -translate-y-10 translate-x-16">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="DevSync"
                className="h-12 w-12"
              />

              <div>

                <h2 className="text-3xl font-black">

                  <span className="text-white">
                    Dev
                  </span>

                  <span className="text-blue-400">
                    Sync
                  </span>

                </h2>

                <p className="text-sm text-slate-500">
                  Collaborative Cloud IDE
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-400">
              DevSync enables developers to collaborate,
              execute code and build software together
              in real time.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Technology
              </Link>

              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Documentation
              </Link>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  transition
                  hover:border-blue-500
                  hover:text-blue-400
                "
              >
                <Globe size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex items-center justify-between">

            <p className="text-sm text-slate-500">
              © 2026 DevSync. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built with React • TypeScript • Socket.IO • Monaco
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}