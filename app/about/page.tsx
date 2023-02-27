import ProfileCircle from "../components/ProfileCircle";

export default function About() {
  return (
    <main className="flex flex-col  flex-grow">
      <div className="grid grid-cols-2 w-screen">
        <div className="flex flex-col mx-auto min-h-screen gap-20 justify-start mt-32 items-center w-full">
          <div className="flex flex-row  gap-24 min-w-full pl-14">
            <h1 className="text-6xl self-start vertical-rl">Experience</h1>
            <div className="flex flex-col items-start gap-16">
            <div className="flex flex-row justify-between min-w-full gap-52">
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-start gap-4" >
              <span><h2 className="text-4xl">Assistant manager</h2><h2 className="text-xl">at Nutri2Go</h2></span>

              <ul className="list-disc pl-10 ">
                <li>dsad</li>
                <li>sdffadasf</li>
              </ul>
            </div>
            </div>
            <h1 className="text-2xl self-center vertical-rl">2021-2023</h1>
            </div>
            <div className="flex flex-row justify-between min-w-full gap-52">
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-start gap-4" >
              <span><h2 className="text-4xl">Assistant manager</h2><h2 className="text-xl">at Nutri2Go</h2></span>

              <ul className="list-disc pl-10 ">
                <li>dsad</li>
                <li>sdffadasf</li>
              </ul>
            </div>
            </div>
            <h1 className="text-2xl self-center vertical-rl">2021-2023</h1>
            </div>
            </div>
          </div>
          <div className="flex flex-row  gap-24 min-w-full pl-14">
            <h1 className="text-6xl self-start vertical-rl">Education</h1>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-3xl">Nottingham trent University</h2>
              <ul>
                <li>dsad</li>
                <li>sdffadasf</li>
              </ul>
              <ul>
                <li>dsad</li>
                <li>sdffadasf</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto  justify-center  item-center w-1/2 h-screen">
          <ProfileCircle />
        </div>
      </div>
    </main>
  );
}
