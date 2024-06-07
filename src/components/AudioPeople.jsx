import people from "../assets/People.svg";

function AudioPeople() {
  return (
    <div className="w-[1110px] h-[588px] rounded-xl flex">
      <div className="w-[455px] h-[295px] flex flex-col justify-center">
        <div className="text-[40px] leading-[44px] tracking-[1.43px] font-bold">
          <h1 className="mt-[150px]">
            Bringing you the
            <span className="text-[#D87D4A]">
              <br />
              best
            </span>
            audio gear
          </h1>
        </div>
        <p className="pt-[40px] text-[15px] leading-[25px] text-gray-700">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={people} alt="Audiophile People" className="rounded-xl" />
      </div>
    </div>
  );
}

export default AudioPeople;
