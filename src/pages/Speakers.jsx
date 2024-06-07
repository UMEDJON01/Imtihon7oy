import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Zx9p from "../assets/Zx9.svg";
import Speaker from "../assets/Zx7.svg";
import ProductsNavigate from "../components/ProductsNavigate";
import ProductsNav from "../components/ProductsNav";
import ProductNavigate from "../components/ProductNavigate";
import Footer from "../layout/Footer";
import AudioPeople from "../components/AudioPeople";

function Speakers() {
  const navigate = useNavigate();
  const [Zx9, setZx9] = useState(null);
  const [Zx7, setZx7] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/zx9-speaker")
      .then((res) => res.json())
      .then((data) => {
        setZx9(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/zx7-speaker")
      .then((res) => res.json())
      .then((data) => {
        setZx7(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="text-center py-10 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold uppercase">Speakers</h1>
      </div>

      <div className="w-[1110px] flex mx-auto mt-10">
        {Zx9 && (
          <>
            <div className="w-1/2 flex justify-center items-center bg-gray-200 rounded-2xl">
              <img
                src={Zx9p}
                className="w-[500.24px] h-[386px]"
                alt="ZX9 Speaker"
              />
            </div>
            <div className="w-1/2 p-10">
              {Zx9.new && (
                <span className="text-[#D87D4A] text-sm tracking-wide">
                  NEW PRODUCT
                </span>
              )}
              <h2 className="text-4xl font-bold mt-5">{Zx9.name}</h2>
              <p className="mt-5">{Zx9.description}</p>
              <button
                onClick={() => navigate("/ZX9SPEAKER")}
                className="uppercase text-white bg-[#D87D4A] hover:bg-[#FBAF85] mt-5 py-2 px-4 rounded-lg"
              >
                See product
              </button>
            </div>
          </>
        )}
      </div>

      <div className="w-[1110px] flex mx-auto mt-10">
        {Zx7 && (
          <>
            <div className="w-1/2 p-10">
              {Zx7.new && (
                <span className="text-[#D87D4A] text-sm tracking-wide">
                  NEW PRODUCT
                </span>
              )}
              <h2 className="text-4xl font-bold mt-5">{Zx7.name}</h2>
              <p className="mt-5">{Zx7.description}</p>
              <button
                onClick={() => navigate("/ZX7Speaker")}
                className="uppercase text-white bg-[#D87D4A] hover:bg-[#FBAF85] mt-5 py-2 px-4 rounded-lg"
              >
                See product
              </button>
            </div>
            <div className="w-1/2 flex justify-center items-center bg-gray-200 rounded-2xl">
              <img
                src={Speaker}
                className="w-[500.24px] h-[386px]"
                alt="ZX7 Speaker"
              />
            </div>
          </>
        )}
      </div>

      <div className="w-[1110px] mx-auto flex gap-7 mt-20">
        <ProductsNavigate />
        <ProductsNav />
        <ProductNavigate />
      </div>

      <div className="mt-20">
        <AudioPeople />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Speakers;
