import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import logo from '../../../assets/logo/devsync-logo-modern.svg';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#030005]/80 backdrop-blur-xl"
    >
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
          className="flex shrink-0 items-center group"
        >
          <img
            src={logo}
            alt="DevSync"
            className="h-12 w-auto select-none transition-transform duration-300 group-hover:scale-105"
            draggable={false}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {['Features', 'Technology', 'Docs'].map((item) => (
            <Link
              key={item}
              to="/"
              className="text-sm font-medium text-slate-400 transition duration-300 hover:text-purple-400"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-8">
          <Link
            to="/login"
            className="text-[16px] font-medium text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              inline-flex
              h-12
              min-w-[160px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-purple-500
              px-8
              text-[16px]
              font-semibold
              text-white
              shadow-[0_0_20px_rgba(139,92,246,0.3)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
              hover:from-purple-500
              hover:to-purple-400
            "
          >
            <span>Start Free</span>
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}