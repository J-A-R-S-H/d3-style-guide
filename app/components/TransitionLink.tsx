"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
  href: string;
  label: string;
  src?: string;
}

const TransitionLink = ({ href, label, src }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <div onClick={handleClick} className="group cursor-pointer">
      <button className="hover:text-neutral-700 mb-3 block">{label}</button>
      {src && (
        <img
          src={src}
          alt=""
          className="
          border-4 border-transparent 
          transition-all duration-300 
          group-hover:scale-105 
          group-hover:opacity-80 
          group-hover:border-blue-500
        "
        />
      )}
    </div>
  );
};

export default TransitionLink;
