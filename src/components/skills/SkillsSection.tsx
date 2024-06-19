import { FaNodeJs, FaReact, FaPython, FaDocker, FaGit } from "react-icons/fa";
import {
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiAmazonaws,
  SiCypress,
  SiFastapi,
  SiFigma,
  SiGithubactions,
  SiJenkins,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMui,
  SiNixos,
  SiRedux,
  SiStyledcomponents,
  SiTerraform,
  SiVisualstudiocode,
} from "react-icons/si";
import SkillCategory, {
  SkillCategoryProps,
} from "@/components/skills/SkillCategory";

const frontendSkills = [
  { icon: FaReact, name: "React" },
  { icon: SiMui, name: "Material-UI" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiStyledcomponents, name: "Styled Components" },
  { icon: SiTypescript, name: "TypeScript" },
];

const backendSkills = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaPython, name: "Python" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiFastapi, name: "FastAPI" },
];

const cloudSkills = [
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiAmazonaws, name: "AWS" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiTerraform, name: "Terraform" },
  { icon: SiGithubactions, name: "GitHub Actions" },
  { icon: SiJenkins, name: "Jenkins" },
];

const otherSkills = [
  { icon: FaDocker, name: "Docker" },
  { icon: FaGit, name: "Git" },
  { icon: SiVisualstudiocode, name: "VS Code" },
  { icon: SiJest, name: "Jest" },
  { icon: SiCypress, name: "Cypress" },
  { icon: SiNixos, name: "Nix" },
];

const TechSkills = () => {
  const categories: SkillCategoryProps[] = [
    { name: "Frontend", skills: frontendSkills, direction: "left" },
    { name: "Backend", skills: backendSkills, direction: "right" },
    { name: "Cloud", skills: cloudSkills, direction: "left" },
    { name: "Other", skills: otherSkills, direction: "right" },
  ];

  return (
    // linear gradient diagonally from gray.400 to gray.200
    <>
      {categories.map((category, index) => (
        <SkillCategory
          key={index}
          name={category.name}
          skills={category.skills}
          direction={category.direction}
        />
      ))}
    </>
  );
};

export default TechSkills;
