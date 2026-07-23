import GitHub from "@/components/icons/GitHub.astro";
import React from "@/components/icons/React.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import TypeScript from "@/components/icons/TypeScript.astro";
import AstroIcon from "@/components/icons/Astro.astro";
import Netlify from "@/components/icons/Netlify.astro";
import Firebase from "@/components/icons/Firebase.astro";
import Firestore from "@/components/icons/Firestore.astro";

export const TAGS = {
  REACT: {
    name: "React",
    class: "bg-blue-500 text-white",
    icon: React,
  },

  ASTRO: {
    name: "Astro",
    class: "bg-purple-700 text-white",
    icon: AstroIcon,
  },

  TAILWIND: {
    name: "Tailwind",
    class: "bg-sky-500 text-white",
    icon: Tailwind,
  },

  FIREBASE: {
    name: "Firebase",
    class: "bg-orange-500 text-white",
    icon: Firebase,
  },

  FIRESTORE_REST: {
    name: "Firestore REST",
    class: "bg-amber-500 text-black",
    icon: Firestore,
  },

  FIRESTORE_SDK: {
    name: "Firestore SDK",
    class: "bg-yellow-400 text-black",
    icon: Firestore,
  },

  NETLIFY: {
    name: "Netlify",
    class: "bg-teal-500 text-white",
    icon: Netlify,
  },

  GITHUB: {
    name: "GitHub",
    class: "bg-black text-white",
    icon: GitHub,
  },

  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-600 text-white",
    icon: TypeScript,
  },
} as const;