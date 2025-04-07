export default function Aboutme() {
  return (
    <div className="flex flex-col h-screen bg-base-100 relative overflow-hidden">
      <div className="w-140 h-140 bg-primary-content rounded-full blur-3xl ml-[100px] opacity-20"></div>

      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <h1 className="text-5xl font-bold text-secondary-content">
          ABOUT <span className="text-primary">ME</span>
        </h1>
        <div className="relative bg-primary-content w-70 h-150 shadow flex justify-center items-center opacity-30 rounded-3xl">
          <p className="w-full h-full flex items-center text-xl text-white text-justify p-10">
            Hello! My name is Druica Denisa-Adina and I am a 19 years old
            developer from Romania. I’ve graduated “Colegiul National “Gheorghe
            Munteanu Murgoci” in 2024 and now I am studying at Politehnica
            University of Bucharest at the Faculty of Engineering in Foreign
            Languages, CTI(E). I am a very hard working person and I also love
            learning new things. I am in a constant state of improving my skills
            and exploring different areas of this field.
          </p>
        </div>
      </div>

      <div className="w-140 h-140 bg-primary-content rounded-full blur-3xl ml-[100px] opacity-20"></div>
    </div>
  );
}
