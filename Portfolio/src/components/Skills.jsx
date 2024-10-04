import { Cards } from "./Card";

export const Skills = () => {
  return (
    <div className="flex justify-between items-center py-32 max-sm:flex-col gap-3 w-full animate-fadeIn">
      <p className="font-bebas text-6xl animate-slideInFromLeft w-full">
        SKILLS
      </p>
      <div className="flex flex-wrap justify-start gap-6">
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/javascript/javascript-plain.svg"
          name="Javascript"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-plain.svg"
          name="Typescript"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
          name="Tailwind"
        />
        <Cards
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          name="Git"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg"
          name="GitHub"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original.svg"
          name="React"
        />
        <Cards
          src="https://raw.githubusercontent.com/laravel/art/master/logo-mark/5%20svg/1%20PMS/laravel-mark-PMS-red-1788C.svg"
          name="Laravel"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg"
          name="PostgreSQL"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          name="MongoDB"
        />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
          name="Linux"
        />
        <Cards src="assets/icons/vercel.png" name="Vercel" />
        <Cards
          src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          name="AWS"
        />
      </div>
    </div>
  );
};
