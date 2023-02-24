import ProfileCircle from "../components/ProfileCircle";

export default function About() {
  return (
    <main className="flex flex-col flex-grow">
      <div className="grid grid-cols-2">
        <div className="flex flex-col mx-auto min-h-screen justify-start my-14 items-center min-w-1/2">
        <div className="flex flex-col justify-between  min-w-1/2">
          <h1 className="text-6xl self-start rotate-180">Experience</h1>
          <div className="flex flex-col justify-center items-start">
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
          <h2>Education</h2>
        </div>
        <div className="flex flex-col mx-auto  justify-center item-center w-1/2">
          <ProfileCircle />
        </div>
      </div>
    </main>
  );
}
