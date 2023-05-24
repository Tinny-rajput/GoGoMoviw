import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright GoGoMoviw</span>
        <span className="hidden md:block"> &copy; 2022</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
          <a
          href="https://github.com/Tinny-rajput"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition duration-300"
          >
            <AiFillGithub size={25} />
          </a>
          <a
            href="https://www.instagram.com/tinny_rajput56"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <BsInstagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
