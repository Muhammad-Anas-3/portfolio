"use client";

// Package
import { motion } from "framer-motion";

// Icon
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      num: "01",
      title: "Frontend Web Development",
      description:
        "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    },
    {
      num: "02",
      title: "Backend Web Development",
      description:
        "Creating robust and scalable server-side applications using Node.js and Express.js.",
    },
    {
      num: "03",
      title: "MERN stack Development",
      description:
        "Developing complete web applications from front-end to back-end using React, Tailwind CSS, Node.js, and Express.js.",
    },
    {
      num: "03",
      title: "Next.JS Development",
      description:
        "Developing complete web applications from front-end to back-end using Next.js and Tailwind CSS",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex justify-center gap-6 flex-col"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline w-full transition-all duration-500 hover:text-outline-hover text-transparent">
                    {service.num}
                  </div>
                  <div className="p-3 rounded-full bg-white group-hover:bg-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-black text-3xl" />
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
