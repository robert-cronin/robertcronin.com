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

import styled from "styled-components";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useColorModeValue } from "@chakra-ui/react";

// Hover colors map
const hoverColors = {
  github: "#4078c0",
  linkedin: "#0073b1",
  stackoverflow: "#f48024",
  xTwitter: "#e7e9ea",
};

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const IconLink = styled.a<{ color: string; hoverColor: string }>`
  font-size: 2rem;
  transition: color 0.3s;
  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const SocialLinks = () => {
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <SocialContainer>
      <IconLink
        href="https://github.com/robert-cronin"
        target="_blank"
        rel="noopener noreferrer"
        color={iconColor}
        hoverColor={hoverColors.github}
      >
        <FaGithub />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/robbiecronin/"
        target="_blank"
        rel="noopener noreferrer"
        color={iconColor}
        hoverColor={hoverColors.linkedin}
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        href="https://stackoverflow.com/users/7644072/robbie-cronin"
        target="_blank"
        rel="noopener noreferrer"
        color={iconColor}
        hoverColor={hoverColors.stackoverflow}
      >
        <FaStackOverflow />
      </IconLink>
      <IconLink
        href="https://x.com/robcronin"
        target="_blank"
        rel="noopener noreferrer"
        color={iconColor}
        hoverColor={hoverColors.xTwitter}
      >
        <FaXTwitter />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialLinks;
