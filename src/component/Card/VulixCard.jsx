import testImg from "../../assets/092f57fdb925f6ac575b2fe7b939fe86.jpeg";

function VulixCard() {
  return (
    <div className="relative min-w-[200px] sm:min-w-[250px] bg-stone-200 h-[300px] rounded-lg  shadow-lg group">
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-10 opacity-100 rounded-t-lg bg-amber-300 px-2 group-hover:opacity-100 group-hover:top-[-30px] transition-all duration-1000 ease-in-out">
        <div className="promp w-[220px] h-[30px] text-center ">
          <span className="text-white text-base bold ">Vip</span>
        </div>
      </div>
      <div className="relative overflow-hidden z-10">
        <img
          src={testImg}
          alt="test"
          className="w-full h-[150px] sm:h-[200px] object-cover rounded-t-lg"
        />
        <div className="absolute top-full group-hover:top-0 w-full h-full z-20 left-0 bg-white bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out">
          <div className="flex justify-between items-center p-3">
            <div>
              <p className="text-xs sm:text-sm flex items-center">
                <p className="w-2 h-2 mr-1 rounded-full bg-primary"></p>
                <p className="text-xs sm:text-sm">إلى: 2021-10-10</p>
              </p>
              <p className="text-xs sm:text-sm flex items-center">
                <p className="w-2 h-2 mr-1 rounded-full bg-primary"></p>
                <p className="text-xs sm:text-sm">إلى: 2021-10-10</p>
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm">مجاني</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2 ml-2">
        <div>
          <div className="rounded-full bg-red-300 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"></div>
        </div>
        <div className="ml-2">
          <h1 className="text-sm sm:text-base font-bold">
            مؤتمر التعليم والتكنولوجيا
          </h1>
          <p className="text-xs sm:text-sm">Infinity Events Co.</p>
        </div>
      </div>
    </div>
  );
}

export default VulixCard;
