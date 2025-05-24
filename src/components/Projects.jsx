import React from "react";

import gemini from "../../public/gemini-ai.jpg";
import portfolio from "../../public/portfolio.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: gemini,
      name: "Gemini Ai Clone",
      githublink: "https://github.com/Avi-2024/Gemini-Ai-Clone.git",
      content:
        "A clone of Gemini AI, a powerful AI platform that provides advanced natural language processing capabilities.",
    },
     {
      id: 2,
      logo: portfolio,
      name: "Portfolio Website",
      githublink: "https://github.com/Avi-2024/Portfolio.git",
      content:
        "A personal portfolio website showcasing my skills, projects, and experiences as a web developer.",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projets</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
          {cardItem.map(({ id, logo, name, githublink ,content}) => (
            <div
              className=" md:h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 mx-5 flex flex-col items-center justify-evenly"
              key={id}
            >
              <img
                src={logo}
                className="p-1  border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
{content}       </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around  flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                <a
                  href={githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  GitHub Repo
                </a>
               </button>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div >
  );
}

export default PortFolio;
