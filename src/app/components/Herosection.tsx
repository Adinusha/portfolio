export default function Herosection() {
  return (
    <div className="flex flex-col h-screen bg-base-100 relative items-center justify-center overflow-hidden ">
      <div className="items-center flex flex-col text-stroke-2 ">
        <h1 className="text-5xl text-secondary-content font-bold justify-center items-center font-main pr-[87px] md:pr-[0px] ">
          THE PLACE <br className="md:hidden" /> WHERE{" "}
          <br className="md:hidden" />
          <strong className="text-primary  ">IMAGINATION</strong> <br />
          <span className="md:pl-46.5">
            BECOMES <br className="md:hidden " />
            <strong className="text-primary ">REALITY</strong>{" "}
          </span>
        </h1>
      </div>
      <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 mb-23 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="43"
          viewBox="0 0 33 43"
          fill="none"
        >
          <path
            d="M18.0235 39.523C16.9737 40.5729 15.2688 40.5729 14.219 39.523L0.781494 26.0855C-0.268311 25.0357 -0.268311 23.3309 0.781494 22.2811C1.8313 21.2313 3.53618 21.2313 4.58599 22.2811L13.4379 31.1414V5.375C13.4379 3.88848 14.6389 2.6875 16.1254 2.6875C17.612 2.6875 18.8129 3.88848 18.8129 5.375V31.133L27.6649 22.2895C28.7147 21.2396 30.4196 21.2396 31.4694 22.2895C32.5192 23.3393 32.5192 25.0441 31.4694 26.0939L18.0319 39.5314L18.0235 39.523Z"
            fill="#33595E"
          />
        </svg>
      </div>
    </div>
  );
}
