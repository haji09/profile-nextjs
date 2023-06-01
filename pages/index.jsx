import Image from 'next/image';
import { GrNotes, GrLinkedinOption } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className=" ">
        <div className="backdrop-filter  backdrop-blur-lg bg-white border-2 w-[100%] md:w-[80%] my-10 md:m-auto p-2 rounded-xl md:rounded-[40px] shadow-inner drop-shadow-2xl md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] ">
          <div className=" w-[100%] h-auto  ">
            <div className=" w-[100%] h-auto p-2 md:flex ">
              <div className="w-full md:w-[50%]">
                <div className="w-full h-auto">
                  <div className="w-full sm:h-80 md:h-96 lg:h-96 p-2 ">
                    <img
                      className="w-[100%] border-2cd md:mt-4 md:w-[70%] h-[100%] mx-auto rounded-lg drop-shadow-xl"
                      src="/profilePic.jpg"
                      alt="dispaly picture"
                    />
                  </div>
                </div>
                <div className="w-full  place-content-center my-5 md:my-10 lg:my-16 text-center align-middle">
                  <h1 className="text-gray-700 text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold px-4 tracking-wide">
                    Mohammed Haji Baba
                  </h1>
                  <p className="m-2 text-gray-500 text-lg xs:text-xl md:text-2xl lg:text-3xl  text-center align-middle  tracking-wide">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="md:flex md:w-[50%]">
                <div className="border-b-2 border-dashed border-gray-500 my-2 mb-6 opacity-20 md:hidden"></div>
                <div className="md:border-l-2 md:border-dashed md:border-gray-500 opacity-20 md:mx-2"></div>
                <div className="flex flex-col space-y-3 md:justify-evenly lg:space-y-4 w-[100%]  md:p-3 lg:p-4 text-xl md:text-2xl lg:text-4xl">
                  <Link href="/assets/resume.pdf" target="_blank">
                    <div className="text-gray-700 flex bg-emerald-300 hover:bg-emerald-200 justify-between p-3 md:p-5  lg:p-7 rounded-[30px] md:rounded-[50px] lg:rounded-[60px] md:transition md:ease-in-out md:delay-100  md:hover:scale-95 shadow-lg cursor-pointer">
                      <div className="">Resume</div>
                      <div>
                        <GrNotes />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
                    target="_blank"
                  >
                    <div className="text-gray-700 flex bg-emerald-300 hover:bg-emerald-200 justify-between p-3 md:p-5  lg:p-7 rounded-[30px] md:rounded-[50px] lg:rounded-[60px] md:transition md:ease-in-out md:delay-100  md:hover:scale-95 shadow-lg cursor-pointer">
                      <div>Gmail</div>
                      <div>
                        <SiGmail />
                      </div>
                    </div>
                  </Link>
                  <Link href="https://github.com/haji09" target="_blank">
                    <div className="text-gray-700 flex bg-emerald-300 hover:bg-emerald-200 justify-between p-3 md:p-5  lg:p-7 rounded-[30px] md:rounded-[50px] lg:rounded-[60px] md:transition md:ease-in-out md:delay-100  md:hover:scale-95 shadow-lg cursor-pointer">
                      <div>Github</div>
                      <div>
                        <BsGithub />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohammed-haji-886209144/"
                    target="_blank"
                  >
                    <div className="text-gray-700 flex bg-emerald-300 hover:bg-emerald-200 justify-between p-3 md:p-5  lg:p-7 rounded-[30px] md:rounded-[50px] lg:rounded-[60px] md:transition md:ease-in-out md:delay-100  md:hover:scale-95 shadow-lg cursor-pointer">
                      <div>LinkedIn</div>
                      <div>
                        <GrLinkedinOption />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="https://haji-portfolio.vercel.app/"
                    target="_blank"
                  >
                    <div className="text-gray-700 flex bg-emerald-300 hover:bg-emerald-200 justify-between p-3 md:p-5  lg:p-7 rounded-[30px] md:rounded-[50px] lg:rounded-[60px] md:transition md:ease-in-out md:delay-100  md:hover:scale-95 shadow-lg cursor-pointer">
                      <div>Portfolio</div>
                      <div>
                        <TbDeviceDesktopAnalytics />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
