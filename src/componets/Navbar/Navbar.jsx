import logo from "./logo.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="h-10vh flex justify-between  text-white
       lg:py-5 px-20"
      >
        <Link to="/">PandaShop</Link>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-center font-normal  ">
          <div className="flex flex-10 gap-8">
            <ul className="flex gap-8 mr-20 text-[18px]">
              <li>
                <Link to="/Men">Men</Link>
              </li>
              <li>
                {" "}
                <Link to="/women"> Women</Link>
              </li>
              <li>
                <Link to="/jewelery">Jewelery</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button class=" shadow w-[100px] rounded-lg hover:bg-slate-100 text-white font-semibold hover:text-slate-900  border mx-[15px] border-slate-300 hover:border-transparent ">
            Sing up
          </button>
        </div>

        <div>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Navbar;
