import Navbar from "../../../shared/components/Navbar";
import Hero from "../../../shared/components/Hero";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}