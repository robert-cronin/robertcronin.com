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

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SkillIconProps } from "@/components/skills/SkillIcon";
import SkillIcon from "./SkillIcon";

type SkillCategoryProps = {
  name: string;
  skills: SkillIconProps[];
  direction: "left" | "right";
};

const SkillCategory = ({ name, skills, direction }: SkillCategoryProps) => {
  const duplicatedSlides = [...skills, ...skills, ...skills, ...skills];

  return (
    <Box
      marginBottom={8}
      minWidth="200px"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading as="h3" size="lg" mb={4} textAlign="center">
        {name}
      </Heading>

      <Box
        position="relative"
        height="full"
        overflow="hidden"
        py={3}
        mx="auto"
        width="100%"
        minWidth="600px"
        color="white"
      >
        <Box
          position="absolute"
          inset={0}
          zIndex={20}
          _before={{
            content: `""`,
            position: "absolute",
            left: 0,
            top: 0,
            width: "25%",
            height: "100%",
            bgGradient: "linear(to-r, gray.50, transparent)",
            filter: "blur(3px)",
          }}
          _after={{
            content: `""`,
            position: "absolute",
            right: 0,
            top: 0,
            width: "25%",
            height: "100%",
            bgGradient: "linear(to-l, gray.50, transparent)",
            filter: "blur(3px)",
          }}
        />

        <motion.div
          style={{ display: "flex" }}
          animate={{
            x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <SkillIcon
              key={index}
              width={`${100 / skills.length}%`}
              icon={slide.icon}
              name={slide.name}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default SkillCategory;
export type { SkillCategoryProps };
