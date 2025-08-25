import GitHub from "@/components/icons/GitHub.astro";
import NextJS from "@/components/icons/NextJS.astro";
import Tailwind from "@/components/icons/Tailwind.astro";

export const TAGS = {
  REACT: {
    name: "React",
    class: "bg-blue-500 text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#38bdf8] text-white",
    icon: Tailwind,
  },
  GITHUB: {
    name: "GitHub",
    class: "bg-black text-white",
    icon: GitHub,
  },
};

export const PROJECTS = [
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    description: "Un clon funcional de Spotify usando Astro y Tailwind CSS.",
    tags: ["REACT", "TAILWIND"],
    imageIndex: "/projects/spotify-clone/main.png",
    imagesDetail: ["/projects/spotify-clone/details1.png", "/projects/spotify-clone/details2.png"],
    github: "https://github.com/tuuser/spotify-clone",
    link: "https://spotify-clone-demo.vercel.app",
  },
];
