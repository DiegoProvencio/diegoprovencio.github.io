import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/diegoprovenciomoreno/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/DiegoProvencio"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="https://codeforces.com/profile/Fokuss"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] transition drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Codeforces"
      >
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="20" width="16" height="42" rx="3" />
          <rect x="24" y="6" width="16" height="56" rx="3" />
          <rect x="46" y="30" width="16" height="32" rx="3" />
        </svg>
      </a>


      <a
        href="https://www.instagram.com/diegoprovencio_/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
