import HeaderSide from "../components/HeaderSide";

function Header({ children }) {
  return (
    <div className="bg-[#131313] opacity-100 w-full h-[735px]">
      <HeaderSide />
      {children}
    </div>
  );
}

export default Header;
