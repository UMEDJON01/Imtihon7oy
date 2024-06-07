import AudioPeople from "../components/AudioPeople";
import ProductNavigate from "../components/ProductNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductsNavigate from "../components/ProductsNavigate";
import ProductsHome from "../components/ProductsHome";
import Yx1 from "../components/Yx1";
import ZX9Speaker from "../components/ZX9SpeakerHome";
import Zx7 from "../components/Zx7";
import Footer from "../layout/Footer";

function Home() {
  return (
    <>
      <div className="w-full h-[729px]">
        <ProductsHome />
      </div>
      <div className="w-1 rounded-2xl ml-[190px]">
        <div className="flex gap-7">
          <ProductsNavigate />
          <ProductsNav />
          <ProductNavigate />
        </div>
      </div>
      <div className="ml-[190px] mt-[171px]">
        <ZX9Speaker />
      </div>
      <div className="mt-[50px] ml-[190px]">
        <Zx7 />
      </div>
      <div className="mt-[48px] ml-[190px]">
        <Yx1 />
      </div>
      <div className="mt-[200px] ml-[190px]">
        <AudioPeople />
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
