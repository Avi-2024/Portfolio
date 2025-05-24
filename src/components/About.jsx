import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          I am Avi Tamrakar, a motivated Backend Developer with hands-on
          experience in building scalable server-side applications using Node.js
          and Express.js. I specialize in developing RESTful APIs, integrating
          backend logic with front-end interfaces, and optimizing server
          performance. During my professional journey, I’ve contributed to both
          backend and full stack roles, including an internship where I worked
          with React.js for front-end development. With a strong foundation in
          JavaScript, MongoDB, and API testing using Postman, I continuously
          strive to expand my full stack capabilities while maintaining a sharp
          focus on backend excellence. I'm currently working at Black Grapes
          Soft Tech Pvt. Ltd., where I contribute to developing dynamic and
          efficient web applications.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          <div className="mb-4">
            <h3 className="font-bold">Bachelor’s Degree</h3>
            <p>Lakshmi Narain College Of Technology & Science, Indore</p>
            <p>2021 – 2025 | CGPA: 7.23</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Higher Secondary (12th)</h3>
            <p>Govt. Model School Unchehra, Satna</p>
            <p>2020 – 2021 | Percentage: 78.6%</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">High School (10th)</h3>
            <p>Govt. Model School Unchehra, Satna</p>
            <p>2018 – 2019 | Percentage: 81%</p>
          </div>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <ul className="list-disc pl-5">
            <li>
              <strong>Languages & Technologies:</strong> HTML, CSS, JavaScript,
              C++
            </li>
            <li>
              <strong>Frontend:</strong> React.js
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Tools:</strong> Postman
            </li>
            <li>
              <strong>Other:</strong> RESTful API Development
            </li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <div className="mb-4">
            <h3 className="font-bold">Backend Developer – Black Grapes Soft Tech Pvt. Ltd.</h3>
            <p>Vijay Nagar, Indore | Apr 2025 – Present</p>
            <ul className="list-disc pl-5">
              <li>Develop and maintain backend logic using Node.js and Express.js</li>
              <li>Perform API integration with frontend applications</li>
              <li>Convert static pages into dynamic, data-driven ones</li>
              <li>Debug and optimize backend performance</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Full Stack Developer – Intern at Attacktic Lab</h3>
            <p>Noida | Aug 2024 – Oct 2024</p>
            <ul className="list-disc pl-5">
              <li>Developed frontend interfaces using React.js</li>
              <li>Built and maintained RESTful APIs</li>
              <li>Wrote scalable and efficient code</li>
              <li>Participated in code reviews and best practices</li>
            </ul>
          </div>
        </span>
        <br />
        <br />
       
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          As a dedicated Backend Developer, my mission is to design and build reliable, scalable, and high-performance server-side solutions that power seamless user experiences. I aim to write clean, maintainable code and develop robust APIs that enhance the functionality and efficiency of web applications. I am committed to continuous learning and growth in full stack development, contributing to projects that make a meaningful impact and reflect modern development standards and best practices.


        </p>
      </div>
    </div>
  );
}

export default About;
