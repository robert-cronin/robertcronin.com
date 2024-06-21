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

import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ScrollContainer = styled(motion.div)`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  background-color: #d9d9d9;
`;

const ScrollSnap = styled(Box)`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
`;

const HomePage = () => {
  return (
    <ScrollContainer>
      <ScrollSnap
        overflow="hidden"
        position="relative"
        backgroundColor="gray.50"
      >
        <HeroSection />
      </ScrollSnap>
      <ScrollSnap overflowY="scroll">
        <SkillsSection />
      </ScrollSnap>
      <ScrollSnap
        overflowY="scroll"
        bgGradient="linear(to-b, #D9D9D9, gray.50)"
        paddingTop={10}
        position="relative"
      >
        <TechSkills />
      </ScrollSnap>
    </ScrollContainer>
  );
};

export default HomePage;
