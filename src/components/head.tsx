import Image from "next/image";
import pic from "../app/images/icons/logo.png";

export default function Page() {
  const data: Array<String> = [
    "English",
    "Telugu",
    "Hindi",
    "English",
    "Telugu",
    "Hindi",
  ];
  let i = 0;
  var price = 102;
  const options = data.map((lang: String) => {
    i++;
    return (
      <div
        className="p-2 hover:text-primary w-40 bg-white text-base cursor-pointer"
        key={`${i}`}
      >
        {lang}
      </div>
    );
  });
  return (
    <header className="bg-white ">
      <div className="flex flex-wrap sm:justify-between text-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mr-auto ml-auto justify-center ">
        <div className="flex flex-wrap justify-center sm:justify-between pl-2">
          <div className="p-2 hover:text-primary duration-500 transition-all cursor-pointer">
            <i className="fa-regular fa-envelope p-1 text-primary"></i>
            <b> info@webmail.com</b>
          </div>
          <div className="p-2 hover:text-primary duration-500 transition-all cursor-pointer">
            <i className="fa-solid fa-location-dot p-1 text-primary"></i>
            <b>15/A, Nest Tower, NYC</b>
          </div>
        </div>
        <div className="flex">
          <div className="p-2 group/lang cursor-pointer">
            <b className=" group-hover/lang:text-primary duration-500 transition-all">
              English
            </b>
            <i className="fa-solid fa-arrow-down-long p-1 text-primary"></i>

            <div className="absolute translate-y-16 flex-col border duration-500 transition-all group-hover/lang:block shadow-lg font-light text-lg group-hover/lang:translate-y-2 -z-20 group-hover/lang:z-10">
              {options}
            </div>
          </div>
          <div className="p-2 *:p-1 *:px-2 hover:*:text-primary *:duration-500 *:transition-all">
            <i className="fa-brands fa-facebook-f cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-solid fa-basketball cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="flex
      items-center justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mr-auto ml-auto py-5 px-2 sm:max-w-xl max-w-md"
      >
        <Image src={pic} alt=""></Image>
        <div className="hidden  xl:block">
          <i className="fa-solid fa-phone text-primary pr-2 cursor-pointer"></i>
          <b>+91745738921</b>
        </div>
        <div>
          <input
            type="text"
            placeholder=" search..."
            className="rounded-3xl w-100 h-12 focus:outline-primary focus:outline-1 focus:p-2 shadow-lg placeholder:text-black placeholder:p-2 lg:block hidden "
          />
        </div>
        <div className="flex items-center">
          <div className="lg:hidden cursor-pointer">
            <i className="fa-solid fa-magnifying-glass p-3"></i>
          </div>
          <i className="fa-regular fa-user p-3 hover:text-primary cursor-pointer"></i>
          <div className="flex items-center p-3 hover:text-primary">
            <i className="fa-solid fa-cart-shopping   cursor-pointer"></i>
            <div className="flex flex-col  pl-2 text-sm cursor-pointer">
              <div>
                <b>Your Cart</b>
              </div>
              <div className="text-primary text-center">
                <b>${price}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary h-16 text-white  justify-center items-center hidden md:flex">
        <div className="p-4 cursor-pointer">
          <b>Home +</b>
        </div>
        <div className="p-4 cursor-pointer">
          <b>About +</b>
        </div>
        <div className="p-4 cursor-pointer">
          <b>Shop +</b>
        </div>
        <div className="p-4 cursor-pointer">
          <b>News +</b>
        </div>
        <div className="p-4 cursor-pointer">
          <b>Pages +</b>
        </div>
        <div className="p-4 cursor-pointer">
          <b>Contact</b>
        </div>
      </div>
      <div className="md:hidden flex mr-auto ml-auto p-4 border sm:max-w-xl max-w-md justify-between">
        <div className="font-thin ml-2">MENU</div>
        <div className="mr-3 flex flex-col justify-center cursor-pointer">
          <div className="h-0.5 bg-black w-4 my-0.5"></div>
          <div className="h-0.5 bg-black w-4 my-0.5"></div>
          <div className="h-0.5 bg-black w-4 my-0.5"></div>
        </div>
      </div>
    </header>
  );
}
