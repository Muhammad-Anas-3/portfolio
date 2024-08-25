import Link from "next/link";

import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Muhammad-Anas-3" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/muhammad-anas123/" },
];
const SocialLinks = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} target="_blank" className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default SocialLinks;