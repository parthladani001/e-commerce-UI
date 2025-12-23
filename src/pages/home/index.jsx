import Header from "../../components/layout/Header.jsx";
import HeroBanner from "./HeroBanner.jsx";
import FlashSales from "./FlashSales.jsx";
import Categories from "./Categories.jsx";
import BestSelling from "./BestSelling.jsx";
import ExploreProducts from "./ExploreProducts.jsx";
import NewArrival from "./NewArrival.jsx";
import Services from "./Services.jsx";
import Footer from "../../components/layout/Footer.jsx";
import "../../styles/home.css";

const Index = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <HeroBanner />
        <FlashSales />
        <Categories />
        <BestSelling />
        <ExploreProducts />
        <NewArrival />
        <Services />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Index;
