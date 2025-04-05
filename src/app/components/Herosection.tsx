export default function Herosection() {
  return (
    <div className="flex flex-col h-screen bg-base-100 relative overflow-hidden">
      <div className="w-100 h-100 bg-red-600 rounded-full blur-3xl ml-[100px] opacity-20"></div>
      <div className="justify-center items-center flex flex-col ">
        <h1 className="text-5xl text-white font-bold  ">
          THE PLACE <br /> WHERE <br />{" "}
          <strong className="text-red-950">IMAGINATION</strong> <br /> BECOMES{" "}
          <br /> <strong className="text-red-950">REALITY</strong>
        </h1>
      </div>
      <div className="w-100 h-100 bg-red-600 rounded-full blur-3xl mt-[100px] opacity-20"></div>
    </div>
  );
}
