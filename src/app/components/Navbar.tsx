export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 -mt-12 bg-[#FDF1DD] border-b-[1px] md:border-b-2 shadow-none text-primary flex justify-between items-center px-4">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <span className="text-base-100 justify-center items-center text-xl font-serif">
          A
        </span>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="17"
            viewBox="0 0 30 17"
            fill="none"
          >
            <line y1="1" x2="30" y2="1" stroke="#33595E" stroke-width="2" />
            <line y1="8.5" x2="30" y2="8.5" stroke="#33595E" stroke-width="2" />
            <line y1="16" x2="30" y2="16" stroke="#33595E" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
