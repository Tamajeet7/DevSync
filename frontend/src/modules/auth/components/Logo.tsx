import { motion } from "framer-motion";
import logo from "../../../assets/logo/devsync-white.png";

export default function Logo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex justify-center"
    >
      <img
        src={logo}
        alt="DevSync"
        draggable={false}
        className="w-[72px] select-none drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]"
      />
    </motion.div>
  );
}