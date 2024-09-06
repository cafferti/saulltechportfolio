import React from "react";
import dropmenuicon from "./assets/Navigation-Bar.svg";
import mailicon from "./assets/mail.svg";
import saulltechmail from "./assets/icon-mail.svg"
import saulltechsvg from "./assets/saulltechimg.svg"
import location from "./assets/icon-map-pin.svg"
import saulltechwork from "./assets/icon-briefcase.svg"
import saulltechweb from "./assets/icon-link.svg"
import saulltechcvimg from "./assets/download.svg"





function Intro() {
    return (

        <header className="bg-[#292F36] text-white md:py-[15rem]">
            <div className="md:flex">
                <div className="md:fixed md:top-[5rem] flex md:block items-center justify-around">
                    <img src={dropmenuicon} alt="" />
                    <h1 className="text-[#98FAEC] text-5xl font-ubuntu md:hidden text-center w-[90%]">Senior Front-end <br /> Developer</h1>
                </div>

                <div className="border-white border ml-[25%] w-[50%] md:w-[70%] flex flex-col items-center py-3 mx-[5%] md:ml-[10%] px-5 font-mono rounded-tl-[30%] rounded-br-[30%]">
                    <img src={saulltechsvg} alt="" />
                    <h1>saulltech</h1>
                    <p className="pb-3">Fullstack-Developer</p>
                    <div>
                        <div className="flex pb-2">
                            <img className="pr-2" src={saulltechmail} alt="" />
                            <p>saulltech@gmail.com"</p>
                        </div>
                        <div className="flex pb-2">
                            <img className="pr-2" src={location} alt="" />
                            <p>Jos,Nigeria"</p>
                        </div>
                        <div className="flex pb-2">
                            <img className="pr-2" src={saulltechwork} alt="" />
                            <p>Contract/ Freelancer"</p>
                        </div>
                        <div className="flex pb-2">
                            <img className="pr-2" src={saulltechweb} alt="" />
                            <p>www.saulltechtechnologies.com"</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">HTML</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">Flutter</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">React</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">React-Native</p>

                        </div>
                        <div className="flex justify-between py-3 " >
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">Css</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">Javascript</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">Boostrap</p>
                            <p className="bg-[#12F7D6] text-black block px-2 rounded-md">Tailwind</p>

                        </div>

                    </div>


                    <a className="bg-white text-black flex items-center p-2 rounded-md" href="#">DownloadCV <img className="p-1" src={saulltechcvimg} alt="" /></a>

                </div>
                <div className="flex ml-[5%] md:ml-0 mt-[5rem] md:mt-0">
                    <div className="w-[60%]">
                        {/* <h1 className="text-[#98FAEC] text-5xl font-ubuntu">Developer</h1> */}
                        <h1 className="font-ubuntu text-3xl py-7 border border-[#1A1E23] block">
                            Hey <br /> I’m <span className="text-[#12F7D6]">Sinan,</span>
                            <br /> Full-stack developer
                        </h1>
                        <p className="font-ibm font-thin">
                            I help business grow by crafting amazing web experiences. If you’re
                            looking for a developer that likes to get stuff done,
                        </p>
                        <a className="text-[#12F7D6] py-4 flex align-middle items-center" href="#">let’s talk
                            <img className="px-1" src={mailicon} alt="" />
                        </a>
                    </div>

                    <div className="bg-[#1A1E23] rounded-full w-[15rem] items-center py-[30px] px-8 flex font-ibm flex-col justify-around">
                        <div className="flex items-center "><span className="text-[#12F7D6] text-6xl px-5">8</span><p>  Programming <br /> Language</p>
                        </div >
                        <div className="flex items-center "><span className="text-[#12F7D6] text-6xl px-5">5</span><p>Development <br /> Tools</p> </div>
                        <div className="flex items-center "><span className="text-[#12F7D6] text-6xl px-5">9</span><p> Years of <br /> Experience</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Intro;
