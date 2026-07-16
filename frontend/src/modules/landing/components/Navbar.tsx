import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import logo from '../../../assets/logo/devsync-logo.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#0A0E17]/90 backdrop-blur-xl">

      <div
        className="mx-auto flex h-20 max-w-[1600px] items-center justify-between"
        style={{
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="DevSync"
            className="h-14 w-auto select-none"
            draggable={false}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">

          <Link
            to="/"
            className="text-sm font-medium text-slate-400 transition duration-200 hover:text-white"
          >
            Features
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-slate-400 transition duration-200 hover:text-white"
          >
            Technology
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-slate-400 transition duration-200 hover:text-white"
          >
            Docs
          </Link>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-8">

          <Link
            to="/login"
            className="text-[18px] font-medium text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              inline-flex
              h-12
              min-w-[165px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#3B82F6]
              via-[#3B82F6]
              to-[#2563EB]
              px-10
              text-[20px]
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:from-[#4F8FFB]
              hover:to-[#2563EB]
              hover:shadow-xl
              hover:shadow-blue-500/30
            "
          >
            <span>Start Free</span>

            <ArrowRight
              size={22}
              className="ml-2"
              strokeWidth={2.6}
            />
          </Link>

        </div>

      </div>

    </header>
  );
}