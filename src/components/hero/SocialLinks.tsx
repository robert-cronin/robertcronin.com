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

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const IconLink = styled.a`
  color: #000;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #0073b1;
  }

  &:nth-child(1):hover {
    color: #4078c0;
  }

  &:nth-child(2):hover {
    color: #0073b1;
  }

  &:nth-child(3):hover {
    color: #f48024;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <IconLink
        href="https://github.com/robert-cronin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/robbiecronin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        href="https://stackoverflow.com/users/7644072/robbie-cronin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow />
      </IconLink>
      <IconLink
        href="https://x.com/robcronin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialLinks;
