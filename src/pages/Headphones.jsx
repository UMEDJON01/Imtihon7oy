import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductNavigate from "../components/ProductNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductsNavigate from "../components/ProductsNavigate";
import Footer from "../layout/Footer";
import AudioPeople from "../components/AudioPeople";
import two from "../assets/two.svg";
import one from "../assets/one.svg";
import head from "../assets/head.svg";

function Headphones() {
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    MarkTwo: {},
    MarkOne: {},
    XX59: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const markTwoRes = await fetch(
          "http://localhost:3000/xx99-mark-two-headphones"
        );
        const markTwoData = await markTwoRes.json();
        const markOneRes = await fetch(
          "http://localhost:3000/xx99-mark-one-headphones"
        );
        const markOneData = await markOneRes.json();
        const xx59Res = await fetch("http://localhost:3000/xx59-headphones");
        const xx59Data = await xx59Res.json();

        setProducts({
          MarkTwo: markTwoData,
          MarkOne: markOneData,
          XX59: xx59Data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const renderProduct = (product, imgSrc, handleClick) => (
    <div className="w-[1110px] flex h-[560px] pt-[170px] ml-[185px]">
      <div className="left-side w-[440px] h-[460px] mt-[50px] bg-[#F1F1F1] rounded-2xl ">
        <img
          src={imgSrc}
          className="w-[500.24px] pt-[95px] pl-[0px] h-[386px]"
          alt={product.name}
        />
      </div>
      <div className="right pt-[70px]">
        <div className="w-[600px] pt-[0px] pl-[130px] h-[343px]">
          {product.new && (
            <span className="text-[#D87D4A] text-[14px] leading-[20px] tracking-[7px]">
              N E W <span className="ml-2">P R O D U C T </span>
            </span>
          )}
          <h1 className="font-bold pt-[16px] text-[40px] leading-[44px] tracking-[1.43px]">
            {product.name}
          </h1>
          <p className="pt-[45px]">{product.description}</p>
          <button
            onClick={handleClick}
            className="uppercase text-white btn hover:bg-[#FBAF85] mt-[40px] bg-[#D87D4A]"
          >
            see product
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <h1 className="font-bold uppercase text-[40px] pt-[40px] leading-[44px] tracking-[1.43px] pl-[670px] text-white">
          Headphones
        </h1>
        {renderProduct(products.MarkTwo, two, () => navigate("/XX99MarkII"))}
        {renderProduct(products.MarkOne, one, () => navigate("/XX99MarkI"))}
        {renderProduct(products.XX59, head, () => navigate("/XX59"))}
      </div>
      <div className="w-1 rounded-2xl translate-y-[404px] ml-[190px]">
        <div className="flex gap-7">
          <ProductsNavigate />
          <ProductsNav />
          <ProductNavigate />
        </div>
      </div>
      <div className="mt-[699px] ml-[190px]">
        <AudioPeople />
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}

export default Headphones;
