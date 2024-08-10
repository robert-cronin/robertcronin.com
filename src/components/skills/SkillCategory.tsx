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

import styled, { css, keyframes } from "styled-components";
import { useColorModeValue, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ScrollContainer = styled.div`
  width: 100%;
  height: 8rem;
  position: relative;
  overflow-x: clip;

  @media (max-width: 768px) {
    height: 6rem;
  }
`;

const ScrollContent = styled.div<{
  direction: "left" | "right";
  duration: number;
}>`
  display: flex;
  gap: 1rem;
  width: max-content;
  align-items: center;
  height: 100%;

  ${({ direction, duration }) => css`
    animation: ${scroll} ${duration}s linear infinite;
    animation-direction: ${direction === "left" ? "normal" : "reverse"};
  `}

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillCard = styled(Box)`
  position: relative;
  flex: 0 0 auto;
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

const SkillIcon = styled.div<{ color: string }>`
  font-size: 3rem;
  color: ${(props) => props.color};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SkillPopup = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: #333333;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${SkillCard}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  pointer-events: none;
  z-index: 1;
`;

const LeftBlur = styled(BlurOverlay)`
  left: 0;
  background: linear-gradient(to right, #d9d9d9 0%, transparent 100%);
`;

const RightBlur = styled(BlurOverlay)`
  right: 0;
  background: linear-gradient(to left, #d9d9d9 0%, rgba(255, 255, 255, 0) 100%);
`;

type SkillCategoryProps = {
  title: string;
  skills: { icon: IconType; name: string }[];
  direction: "left" | "right";
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ skills, direction }) => {
  const repeatedSkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];
  const bgColor = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("gray", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <ScrollContainer>
      <LeftBlur />
      <ScrollContent direction={direction} duration={repeatedSkills.length * 2}>
        {repeatedSkills.map((skill, index) => (
          <SkillCard
            key={index}
            bg={bgColor}
            borderColor={borderColor}
            borderWidth="1px"
          >
            <SkillIcon as={skill.icon} color={iconColor} />
            <SkillPopup>{skill.name}</SkillPopup>
          </SkillCard>
        ))}
      </ScrollContent>
      <RightBlur />
    </ScrollContainer>
  );
};

export default SkillCategory;
export type { SkillCategoryProps };
