// Copyright 2024 Robert Cronin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fa from "react-icons/fa";
import * as fa6 from "react-icons/fa6";
import * as si from "react-icons/si";
import * as di from "react-icons/di";
import * as tb from "react-icons/tb";
import SkillCategory, { SkillCategoryProps } from "./SkillCategory";
import { useColorModeValue, Box, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const frontendSkills = [
  { icon: fa.FaReact, name: "React" },
  { icon: si.SiMui, name: "Material-UI" },
  { icon: si.SiVite, name: "Vite" },
  { icon: si.SiNextdotjs, name: "Next.js" },
  { icon: si.SiRedux, name: "Redux" },
  { icon: si.SiFigma, name: "Figma" },
  { icon: si.SiStyledcomponents, name: "Styled Components" },
  { icon: si.SiJavascript, name: "JavaScript" },
  { icon: si.SiCss3, name: "CSS3" },
  { icon: si.SiHtml5, name: "HTML5" },
  { icon: si.SiTypescript, name: "TypeScript" },
  { icon: tb.TbBrandReactNative, name: "React Native" },
];

const backendSkills = [
  { icon: fa.FaNodeJs, name: "Node.js" },
  { icon: fa.FaPython, name: "Python" },
  { icon: fa6.FaGolang, name: "Go" },
  { icon: si.SiKotlin, name: "Kotlin" },
  { icon: di.DiJava, name: "Java" },
  { icon: si.SiGin, name: "Gin" },
  { icon: si.SiFastapi, name: "FastAPI" },
  { icon: si.SiExpress, name: "Express.js" },
];

const databaseSkills = [
  { icon: si.SiMongodb, name: "MongoDB" },
  { icon: si.SiPostgresql, name: "PostgreSQL" },
  { icon: si.SiMysql, name: "MySQL" },
  { icon: si.SiRedis, name: "Redis" },
  { icon: si.SiRabbitmq, name: "RabbitMQ" },
  { icon: si.SiApachekafka, name: "Apache Kafka" },
  // this is duplicated because there are too few
  { icon: si.SiMongodb, name: "MongoDB" },
  { icon: si.SiPostgresql, name: "PostgreSQL" },
  { icon: si.SiMysql, name: "MySQL" },
  { icon: si.SiRedis, name: "Redis" },
  { icon: si.SiRabbitmq, name: "RabbitMQ" },
  { icon: si.SiApachekafka, name: "Apache Kafka" },
];

const cloudSkills = [
  { icon: si.SiKubernetes, name: "Kubernetes" },
  { icon: si.SiAmazonaws, name: "AWS" },
  { icon: si.SiLinux, name: "Linux" },
  { icon: si.SiTerraform, name: "Terraform" },
  { icon: si.SiGithubactions, name: "GitHub Actions" },
  { icon: si.SiIstio, name: "Istio" },
  { icon: si.SiOpenfaas, name: "OpenFaaS" },
  { icon: si.SiAwsamplify, name: "AWS Amplify" },
  { icon: si.SiAwslambda, name: "AWS Lambda" },
  { icon: si.SiJenkins, name: "Jenkins" },
  { icon: si.SiArgo, name: "ArgoCD" },
];

const mlSkills = [
  { icon: si.SiTensorflow, name: "TensorFlow" },
  { icon: si.SiOpenai, name: "OpenAI API" },
  { icon: si.SiJupyter, name: "Jupyter" },
  { icon: si.SiElasticsearch, name: "Elasticsearch" },
  { icon: si.SiPytorch, name: "Pytorch" },
  { icon: si.SiNumpy, name: "NumPy" },
  { icon: si.SiOpencv, name: "OpenCV" },
  { icon: si.SiPandas, name: "Pandas" },
  { icon: si.SiScipy, name: "SciPy" },
  { icon: si.SiKeras, name: "Keras" },
];

const toolsSkills = [
  { icon: fa.FaDocker, name: "Docker" },
  { icon: fa.FaGit, name: "Git" },
  { icon: si.SiVisualstudiocode, name: "VS Code" },
  { icon: si.SiJest, name: "Jest" },
  { icon: si.SiCypress, name: "Cypress" },
  { icon: si.SiNixos, name: "NixOS" },
  { icon: si.SiGerrit, name: "Gerrit" },
  { icon: si.SiGrafana, name: "Grafana" },
  { icon: si.SiPrometheus, name: "Prometheus" },
  { icon: si.SiGnubash, name: "GnuBash" },
];

const SkillsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 100vh;
`;

const SkillsHeading = styled(Heading)`
  font-size: 2rem;
  font-weight: 600;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillsText = styled(Text)`
  text-align: center;
  max-width: 800px;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsSection = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  const categories: SkillCategoryProps[] = [
    { title: "Frontend", skills: frontendSkills, direction: "right" },
    { title: "Backend", skills: backendSkills, direction: "right" },
    { title: "Database", skills: databaseSkills, direction: "right" },
    { title: "Cloud", skills: cloudSkills, direction: "right" },
    { title: "MachineLearning", skills: mlSkills, direction: "right" },
    { title: "Tools", skills: toolsSkills, direction: "right" },
  ];

  return (
    <SkillsContainer bg={bgColor} color={textColor}>
      <SkillsHeading>Technologies</SkillsHeading>
      <SkillsText>
        Throughout my career and education, I've developed proficiency with a
        variety of tools and technologies. Here are some of the technologies I
        feel comfortable working with.
      </SkillsText>
      {categories.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </SkillsContainer>
  );
};

export default SkillsSection;
