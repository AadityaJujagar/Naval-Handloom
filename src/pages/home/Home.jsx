import OurProducts from "../../components/our-products/OurProducts";
import HeroSection from "../../components/hero-section/HeroSection";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeroSection />
      <OurProducts />
    </div>
  );
};

export default Home;
