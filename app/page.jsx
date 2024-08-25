"use client";

// Components
import MyPhoto from "@/components/MyPhoto";
import SocialLinks from "@/components/SocialLinks";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

// Icons
import { FiDownload } from "react-icons/fi";

// Package and Link
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello I&#39;m <br />
              <span className="text-green-500">Muhammad Anas</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              With hands-on experience in MERN and Next.js, I&#39;ve built
              responsive, user-friendly web applications that exceed
              expectations. Let&#39;s create something remarkable together.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/Muhammad_Anas_CV.pdf"
                download="Muhammad_Anas_CV.pdf"
                target="_blank"
                className="uppercase flex items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <SocialLinks
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-green-500 text-base hover:bg-green-500 hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <MyPhoto />
          </div>
        </div>
      </div>
      <Stats />
    </motion.div>
  );
};

export default Home;
