"use client";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

// Package
import { motion } from "framer-motion";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  const about = {
    title: "About me",
    description:
      "Hello I'm Muhammad Anas With hands- on experience in MERN and Next.js, I've built responsive, user-friendly web applications that exceed expectations. Let's create something remarkable together.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Muhammad Anas",
      },
      {
        fieldName: "Phone",
        fieldValue: "+92 3254991193",
      },
      {
        fieldName: "Experience",
        fieldValue: "6 Months",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Pakistani",
      },
      {
        fieldName: "Email",
        fieldValue: "muhammadanas222888@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Urdu, English, Hindi",
      },
    ],
  };

  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "Hello I'm Muhammad Anas With hands- on experience in MERN and Next.js, I've built responsive, user-friendly web applications that exceed expectations. Let's create something remarkable together.",
    items: [
      {
        company: "Devsort",
        position: "Full Stack Developer Intern",
        duration: "Jun-2024 - Present",
      },
      {
        company: "Upwork Freelance",
        position: "Full Stack Developer",
        duration: "August-2023 - Present",
      },
    ],
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "I have completed certifications and courses from FreeCodeCamp, Scrimba, and the Code With Harry YouTube channel, which have equipped me with a strong foundation in web development. Let's create something remarkable together.",
    items: [
      {
        institue: "freecodecamp",
        position: "Responsive web design certification",
        duration: "2023",
      },
      {
        institue: "Scrimba",
        position: "Frontend React developer Course",
        duration: "2023",
      },
      {
        institue: "Code With Harry Youtube channel",
        position: "Full stack web development",
        duration: "2023",
      },
      {
        institue: "Virtual University of pakistan",
        position: "Bachelor of Science in Computer Science",
        duration: "2024 - 2028",
      },
      {
        institue: "Sudhum Science College",
        position: "F.Sc Pre-Engineering",
        duration: "2020 - 2022",
      },
    ],
  };

  const skills = {
    icon: "/assets/resume/cap.svg",
    title: "My Skills",
    description:
      "I have honed a diverse set of skills in web development, including HTML, CSS, JavaScript, React, Node.js, Express.js, Next.js, and Tailwind CSS. These technologies have empowered me to build responsive, dynamic, and user-friendly web applications. Let's create something remarkable together.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <RiTailwindCssFill />,
        name: "Tailwind Css",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <RiNextjsFill />,
        name: "Next.js",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[88vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[68px]"
        >
          <TabsList className="flex flex-col w-full max-w-[388px] mx-auto xl:mx-8 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left sm:w-[700px]">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] h-[130px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start  gap-1"
                        >
                          <span className="text-green-500">
                            {item.duration}
                          </span>
                          <h3
                            className="text-xL max-w-[268px] min-h-[68px]
                        text-center sm:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="p-1 rounded-full bg-green-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left sm:w-[700px] mx-auto">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] h-[130px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[38px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start  gap-1"
                        >
                          <span className="text-green-500">
                            {item.duration}
                          </span>
                          <h3
                            className="text-xL max-w-[268px] min-h-[68px]
                        text-center sm:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="p-1 rounded-full bg-green-500"></span>
                            <p className="text-white/60">{item.institue}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full h-full" value="skills">
              <div className="flex flex-col gap-[30px] sm:w-[700px] mx-auto">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] h-[130px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={80}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center hover:text-green-500 transition-all duration-200">
                                <div className="text-6xl ">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <div className="flex flex-col gap-[30px] sm:w-[700px] mx-auto">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] h-[130px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 sm:justify-between gap-y-6 sm:w-[700px] h-[300px]  mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 object-cover"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="overflow-auto">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
