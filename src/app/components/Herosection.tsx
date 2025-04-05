export default function Herosection() {
  return (
    <div className="flex flex-col h-screen bg-base-100 relative overflow-hidden ">
      <div className="w-140 h-140 bg-primary-content rounded-full blur-3xl ml-[100px] opacity-20"></div>
      <div className="items-center flex flex-col text-stroke-2 ">
        <h1 className="text-5xl text-secondary-content font-bold justify-center items-center font-main pr-[87px] ">
          THE PLACE <br /> WHERE <br />
          <strong className="text-primary-content  ">IMAGINATION</strong> <br />
          BECOMES <br />
          <strong className="text-primary-content">REALITY</strong>
        </h1>
      </div>
      <div className="w-140 h-140 bg-primary-content rounded-full blur-3xl mt-[100px] opacity-20"></div>
    </div>
  );
}
