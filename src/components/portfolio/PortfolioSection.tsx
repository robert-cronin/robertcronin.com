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

import * as React from "react";
import styled from "styled-components";
import JueJuURL from "@/assets/jueju.png";
import KubeMedic from "@/assets/kubemedic.png";
import Homelab from "@/assets/homelab.png";
import MindscriptGo from "@/assets/mindscript-go.png";
import RobertCroninCom from "@/assets/robertcronincom.png";

const PortfolioContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  padding: 2rem;
  height: fit-content;
`;

const PortfolioTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const PortfolioBanner = styled.div<{
  direction: "left" | "right";
  color: string;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "left" ? "row" : "row-reverse"};
  background-color: ${(props) => props.color};
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BannerImage = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BannerContent = styled.div`
  flex: 1;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BannerTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BannerDescription = styled.p`
  font-size: 1rem;
`;

type PortfolioItem = {
  title: string;
  description: React.ReactNode;
  url: string;
  imageUrl: string;
  direction: "left" | "right";
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "绝句 (juéjù)",
    description: "AI-Powered Chinese Poetry",
    url: "https://github.com/robert-cronin/jueju",
    imageUrl: JueJuURL,
    direction: "right" as const,
  },
  {
    title: "KubeMedic",
    description: "An intelligent Kubernetes diagnostics tool leveraging OpenAI's GPT-4o mini for advanced troubleshooting and best practices.",
    url: "https://github.com/robert-cronin/kubemedic",
    imageUrl: KubeMedic,
    direction: "left" as const,
  },
  {
    title: "Homelab (k8s)",
    description:
      "Custom-built Kubernetes cluster cobbled together from and old MacMini an 2 Raspberry Pi's. It is the cluster used to host this website and all subdomains!",
    url: "https://github.com/robert-cronin/homelab",
    imageUrl: Homelab,
    direction: "right" as const,
  },
  {
    title: "Mindscript Compiler (Go)",
    description:
      "A fun little hobby project to build a compiler for a simple declarative language programming I invented called 'Mindscript' based on the Minds in Iain M. Banks' Culture series.",
    url: "https://github.com/robert-cronin/mindscript-go",
    imageUrl: MindscriptGo,
    direction: "left" as const,
  },
  {
    title: "Personal Site",
    description:
      "This website! Built with Vite.js, TypeScript, and Chakra UI. Deployed through GitHub Actions to Homelab.",
    url: "https://github.com/robert-cronin/robertcronin.com",
    imageUrl: RobertCroninCom,
    direction: "right" as const,
  },
];

const progressiveShades = [
  "#f0f0f0",
  "#e0e0e0",
  "#d0d0d0",
  "#c0c0c0",
  "#b0b0b0",
];

const PortfolioSection: React.FC = () => {
  return (
    <PortfolioContainer>
      <PortfolioContent>
        <PortfolioTitle>Hobby Projects</PortfolioTitle>
        {portfolioItems.map((item, index) => (
          <PortfolioBanner
            key={index}
            direction={item.direction}
            color={progressiveShades[index % progressiveShades.length]}
            onClick={() => window.open(item.url, "_blank")}
          >
            <BannerImage src={item.imageUrl} alt={item.title} />
            <BannerContent>
              <BannerTitle>{item.title}</BannerTitle>
              <BannerDescription>{item.description}</BannerDescription>
            </BannerContent>
          </PortfolioBanner>
        ))}
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
