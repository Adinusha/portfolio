export default function Aboutme() {
  return (
    <div className="flex flex-col h-screen bg-base-100 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full space-y-20 pt-10">
        <h1 className="text-6xl font-bold text-secondary-content font-main ">
          ABOUT <strong className="text-primary">ME</strong>
        </h1>
        <div className="relative bg-primary md:w-140 md:h-100 w-85 h-140 shadow flex justify-center items-center rounded-3xl">
          <p className="w-full h-full flex items-center text-xl text-base-100 text-justify p-10">
            Hello! My name is Druică Denisa-Adina and I am a 19 years old
            developer from Romania. I’ve graduated “Colegiul National “Gheorghe
            Munteanu Murgoci” in 2024 and now I am studying at Politehnica
            University of Bucharest at the Faculty of Engineering in Foreign
            Languages, CTI(E). I am a very hard working person and I also love
            learning new things. I am in a constant state of improving my skills
            and exploring different areas of this field.
          </p>
        </div>
      </div>
    </div>
  );
}
