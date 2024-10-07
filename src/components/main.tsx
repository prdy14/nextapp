import getData from "src/data/data";

export default function Main() {
  const data = getData();
  return (
    <main className="bg-white">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mr-auto ml-auto py-5  sm:max-w-xl max-w-md">
        <div>
          <div className="flex bg-primary p-4 text-white justify-between">
            <div className="flex cursor-pointer">
              <div className="mr-3 flex flex-col justify-center ">
                <div className="h-0.5 bg-white w-4 my-0.5"></div>
                <div className="h-0.5 bg-white w-4 my-0.5"></div>
                <div className="h-0.5 bg-white w-4 my-0.5"></div>
              </div>
              <div>
                <h3>
                  <b>CATEGORIES</b>
                </h3>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-play fa-rotate-90 fa-2xs "></i>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
