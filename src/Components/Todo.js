import arrow from "../Assets/icons/Arrow.svg";
import check from "../Assets/icons/Check.svg";

const Todo = () => {
  return (
    <div className="max-w-screen-lg m-auto  ">
      <div className="flex flex-col ">
        <h1 className="font-mondaBlack text-white text-8xl text-left mt-5">
          Todo
        </h1>

        {/* Todo Box */}

        {/* Input Box */}
        <div className="max-w-2xl m-auto w-full mt-16 relative">
          <div
            className="bg-[#5AFF31] absolute right-0 w-28 h-16 rounded-tr-3xl rounded-br-3xl flex justify-center items-center cursor-pointer"
            onClick={() => {
              console.log("first");
            }}
          >
            <img src={arrow} alt="arrow" className="w-10 h-7" />
          </div>
          <input
            className="w-full bg-[#25273C] text-white border-collapse font-monda text-4xl rounded-3xl outline-none py-2 px-8 h-16"
            type="text"
            placeholder="Create a new todo ..."
          />
        </div>

        {/* Show Todo  */}
        <div className="bg-[#25273C] mt-14 max-w-2xl mx-auto w-full">
          <div className="flex px-6 py-5  items-center">
            {/* Circle */}
            <span className="w-11 h-11 rounded-full border-[#BF56FF] border-solid border-2 bg-gradient-to-r from-[#E600FA] flex justify-center items-center">
              <img src={check} alt="check" />
            </span>
            {/* Title */}

            <h1 className="ml-7 text-4xl font-monda text-white opacity-70">
              Create a new todo ....
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
