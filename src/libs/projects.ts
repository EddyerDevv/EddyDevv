type ProjectTech =
  | "JavaScript"
  | "TypeScript"
  | "NextJS"
  | "React"
  | "CSS"
  | "HTML"
  | "Astro";

interface Project {
  name: string;
  image?: string;
  description: string;
  repository?: string;
  preview?: string;
  techs: ProjectTech[];
}

export default [
  {
    name: "LunaBot (DiscordBot)",
    description: "A Discord bot written in TypeScript.",
    repository: "https://github.com/EddyerDevv/LunaBot",
    techs: ["TypeScript"],
  },
] as Project[];
