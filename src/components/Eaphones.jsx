import two from "../assets/Earc.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioPeople from "./AudioPeople";
import Footer from "../layout/Footer";
import ProductsNavigate from "./ProductsNavigate";
import ProductsNav from "./ProductsNav";
import ProductNavigate from "./ProductNavigate";

function Earphones() {
  const navigate = useNavigate();
  const [Yx1, setYx1] = useState({});

  function handleClick() {
    navigate("/YX1Earphone");
  }

  useEffect(() => {
    fetch("http://localhost:3000/yx1-earphones")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYx1(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-[40px] uppercase pt-[40px] leading-[44px] tracking-[1.43px] text-center text-white">
        {Yx1 && Yx1.category === "earphones" ? <span>earphones</span> : ""}
      </h1>

      <div>
        <div className="w-[1110px] flex h-[560px] pt-[170px] mx-auto">
          <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl">
            <img
              src={two}
              className="w-full pt-[95px] h-[386px]"
              alt="Earphones"
            />
          </div>
          <div className="right pt-[70px] flex flex-col justify-center">
            <div className="w-[600px] px-[20px] mx-auto">
              {Yx1 && Yx1.new && (
                <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
                  N E W <span className="ml-2">P R O D U C T</span>
                </span>
              )}
              <h1 className="font-bold pt-[16px] text-[40px] leading-[44px] tracking-[1.43px]">
                {Yx1.name}
              </h1>
              <p className="pt-[45px] text-[15px] leading-[25px]">
                {Yx1.description}
              </p>
              <button
                onClick={handleClick}
                className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A] px-[20px] py-[10px] rounded-md"
              >
                see product
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[350px] mx-auto w-full flex justify-center gap-7">
          <ProductsNavigate />
          <ProductsNav />
          <ProductNavigate />
        </div>
        <div className="mt-[200px] mx-auto w-full flex justify-center">
          <AudioPeople />
        </div>
        <div className="mt-[200px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Earphones;
