import ProfileCircle from "../components/ProfileCircle";

export default function About() {
  return (
    <main className="flex flex-col  flex-grow  ">
      <div className="grid grid-cols-2 w-screen my-20">
        <div className="flex flex-col mx-auto h-max gap-20 self-center justify-center  items-center w-full">
          <div className="flex flex-row gap-24 min-w-full pl-14 mb-10">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical">About</h1>
            <div className="flex flex-col justify-center items-center gap-10">
              <p className="text-2xl">BSc Computing graduate with experience in web and mobile application development. Web development technologies I work with are HTML, CSS, JS and React, while I'm confident in using Adobe XD for design.</p>
              <p className="text-2xl">As part of my role as a Web developer intern, I have autonomously delivered a project of designing and developing a website for the NTUs Employability department. </p>
              <p className="text-2xl">I'm working towards improving my current technological abilities to become full-stack developer, but I am also determined to expand my knowledge in technologies such as C# or SQL.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto justify-start my-40 w-1/2">
          <ProfileCircle />
        </div>
      </div>

      

      <div className="bg-white text-green">
        <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical-light">Experience</h1>
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto">
            <div className="flex flex-col justify-center items-start gap-40 min-w-full">
            <div className="flex flex-row justify-between w-full pr-14">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-4">
                    <span>
                      <h2 className="text-4xl  text-shadow-light">Assistant manager</h2>
                      <h2 className="text-xl  text-shadow-light">at Nutri2Go</h2>
                    </span>

                    <ul className="list-disc pl-10 text-lg ">
                      <li className="mb-3 ">
                        Communicating with the manager and CEO; regularly
                        providing feedback and contributing to strategic
                        discussions
                      </li>
                      <li className="mb-3">
                        Supporting management team to identify opportunities for
                        business improvement, growth and maximizing economic
                        benefits
                      </li>
                      <li className="mb-3">
                        Supervising other staff members, training new employees
                        and ensuring that all daily operations run smoothly
                      </li>
                      <li className="mb-3">
                        Performing daily customer service tasks
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="text-2xl self-center vertical-rl text-shadow-vertical-light">
                  2021-present
                </h1>
              </div>

              <div className="flex flex-row justify-between  w-full pr-14">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-4">
                    <span>
                      <h2 className="text-4xl text-shadow-light">Web Developer Intern </h2>
                      <h2 className="text-xl text-shadow-light">
                        at Nottingham Trent University
                      </h2>
                    </span>

                    <ul className="list-disc pl-10 text-lg">
                      <li className="mb-3">
                        Using HTML, CSS, Bootstrap and Adobe XD to independently
                        design and develop a new website for Nottingham Trent
                        University Social Mobility department{" "}
                      </li>
                      <li className="mb-3">
                        Identifying functional and non-functional requirements
                      </li>
                      <li className="mb-3">
                        Collaborating with various departments to ensure that
                        the content and accessibility features are aligned with
                        the appropriate user profiles
                      </li>
                      <li className="mb-3">
                        Managing workload and setting personal deadlines to
                        align with the overall project submission timeline
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="text-2xl self-center vertical-rl text-shadow-vertical-light">
                  August-September 2022
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical">Education</h1>
          <div className="flex flex-row justify-between w-full pr-14">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-4">
                    <span>
                      <h2 className="text-4xl text-shadow">Nottingham Trent University</h2>
                    </span>

                    <ul className="list-disc pl-10 text-lg">
                      <li className="mb-3">
                        Communicating with the manager and CEO; regularly
                        providing feedback and contributing to strategic
                        discussions
                      </li>
                      <li className="mb-3">
                        Supporting management team to identify opportunities for
                        business improvement, growth and maximizing economic
                        benefits
                      </li>
                      <li className="mb-3">
                        Supervising other staff members, training new employees
                        and ensuring that all daily operations run smoothly
                      </li>
                      <li className="mb-3">
                        Performing daily customer service tasks
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="text-2xl self-center vertical-rl text-shadow-vertical">
                  2018 – 2021
                </h1>
              </div>
        </div>






      <div className="bg-white text-green">
        <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical-light">Soft skills</h1>
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto pr-12">
            <h2 className="text-4xl self-center text-shadow-light">Communication</h2>
            <div className="flex flex-row justify-center items-start gap-8 min-w-full">
              <div className="flex flex-col justify-center items-start gap-4 w-1/2">
                <h2 className=" text-lg">In a web development setting:</h2>
                <ul className="list-disc pl-10 text-lg">
                  <li className="mb-3">
                    Communicating with the manager and CEO; regularly providing
                    feedback and contributing to strategic discussions
                  </li>
                  <li className="mb-3">
                    Supporting management team to identify opportunities for
                    business improvement, growth and maximizing economic
                    benefits
                  </li>
                  <li className="mb-3">
                    Supervising other staff members, training new employees and
                    ensuring that all daily operations run smoothly
                  </li>
                  <li className="mb-3">
                    Performing daily customer service tasks
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-start gap-4  w-1/2">
                <h2 className=" text-lg">Current assistant manager role:</h2>
                <ul className="list-disc pl-10 text-lg">
                  <li className="mb-3">
                    Regular communication with CEO, managers and customers
                  </li>
                  <li className="mb-3">
                    Learnt to communicate with various shareholders and provide
                    induction and mentoring to new employees
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-4xl self-center text-shadow-light">
              Time and project management
            </h2>
            <div className="flex flex-row justify-start items-start gap-8 min-w-full">
              <div className="flex flex-col justify-center items-start gap-4">
                <ul className="list-disc pl-10 text-lg">
                  <li className="mb-3">
                    Managing portfolio website development and delivering a
                    freelance project while working full-time as assistant
                    manager
                  </li>
                  <li className="mb-3">
                    Working in accordance with agile methodology as part of the
                    web development internship
                  </li>
                  <li className="mb-3">
                    Understanding project requirements and prioritizing the
                    workload
                  </li>
                  <li className="mb-3">
                    Setting personal deadlines to deliver projects on time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
