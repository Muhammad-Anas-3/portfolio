"use client";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Pacakges
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// hooks and Next Image and Link
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Icons
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  const projects = [
    {
      num: "01",
      category: "Full stack",
      title: "Flexify",
      description:
        "During my internship at Devsort, With other team members we have worked on a project called Flexify. A Web application for managing roles and employees across a company. I created the user interface of the landing page and other screens and worked on the backend as well. This experience provided hands-on full-stack development, including front-end design and back-end development.",
      stack: [
        { name: "Next Js" },
        { name: "Tailwind Css" },
        { name: "PostgreSql" },
      ],
      image: "/assets/work/landingPage.png",
      live: "https://erp-s.vercel.app/",
      github: "https://github.com/sahil-khan-s/ERP-S",
    },
    {
      num: "02",
      category: "Full stack",
      title: "Flexify",
      description:
        "During my internship at Devsort, With other team members we have worked on a project called Flexify. A Web application for managing roles and employees across a company. I created the user interface of the landing page and other screens and worked on the backend as well. This experience provided hands-on full-stack development, including front-end design and back-end development.",
      stack: [
        { name: "Next Js" },
        { name: "Tailwind Css" },
        { name: "PostgreSql" },
      ],
      image: "/assets/work/DashBoard.png",
      live: "https://erp-s.vercel.app/dashboard",
      github: "https://github.com/sahil-khan-s/ERP-S",
    },
    {
      num: "03",
      category: "Full Stack",
      title: "E-Commerce",
      description:
        "This is an E-commerce website built using Next.js, Tailwind CSS, Shadcn UI, and MongoDB, focusing on best UI/UX practices based on a high-fidelity Figma design. Utilizing Next.js 14, I optimized the site for faster page loading times, improved SEO support, and implemented efficient server-side rendering. Additionally, I configured Next-Auth to manage user authentication and maintain session state, and integrated Stripe as the payment gateway to ensure secure and seamless transactions.",
      stack: [
        { name: "Next Js" },
        { name: "Tailwind Css" },
        { name: "MongoDb" },
      ],
      image: "/assets/work/ecommerce.png",
      live: "https://ecommerce-store-project-nu.vercel.app/",
      github: "https://github.com/Muhammad-Anas-3/ecommerce-store-project",
    },
    {
      num: "04",
      category: "Full Stack",
      title: "Tripma",
      description:
        "Tripma is a full-stack hotel booking website built using the MERN stack and Tailwind CSS. This online platform allows users to book hotels and check availability with ease. It features custom authentication implemented using JWT and bcryptjs, ensuring robust security. The website's beautiful, SEO-friendly UI enhances the overall user experience. Additionally, I constructed a RESTful environment to handle multiple client requests, organized through well-structured routes for improved code readability and maintainability.",
      stack: [
        { name: "React Js" },
        { name: "Tailwind Css" },
        { name: "MongoDb" },
        { name: "Node Js" },
        { name: "Expres js" },
      ],
      image: "/assets/work/tripma.png",
      live: "https://booking-app-client-teal.vercel.app/",
      github: "https://github.com/Muhammad-Anas-3/booking-app-client",
    },
    {
      num: "05",
      category: "Full Stack",
      title: "Task Manager",
      description:
        "Task Manager is a full-stack Task Manager website built using the MERN stack and Tailwind CSS. This app provides comprehensive CRUD functionality for managing tasks efficiently. Its beautiful, SEO-friendly UI enhances the user experience. Additionally, I constructed a RESTful environment to handle multiple client requests, organized through well-structured routes for improved code readability and maintainability.",
      stack: [
        { name: "React Js" },
        { name: "Tailwind Css" },
        { name: "MongoDb" },
        { name: "Node Js" },
        { name: "Expres js" },
      ],
      image: "/assets/work/TaskManager.png",
      live: "https://task-manager-frontend-pied.vercel.app/",
      github: "https://github.com/Muhammad-Anas-3/Task-manager-frontend",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swipers) => {
    const currentIndex = swipers.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.dev
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[620px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[620px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-green-500">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* live project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaGithub className="text-white text-3xl group-hover:text-green-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black-10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-500 hover:bg-green-600 text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.dev>
  );
};

export default Work;
