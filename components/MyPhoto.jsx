"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "@/public/assets/photo.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 , ease: "easeInOut"}}
        className="w-[298px] h-[298px] xl:w-[468px] xl:h-[468px]"
      >
        <Image
          src={photo}
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
