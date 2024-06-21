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

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import avatarUrl from "@/assets/avatar.png";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import SocialLinks from "@/components/hero/SocialLinks";
import ResumeLink from "@/components/hero/ResumeLink";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPositionX: ["0%", "100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <>
      <Box
        as={motion.div}
        backgroundImage={'/hero-background.svg'}
        backgroundSize="cover"
        backgroundPosition="0% center"
        position="absolute"
        top="0"
        left="0"
        width="200%"
        height="100%"
        zIndex="1"
        animate={controls}
      />
      <VStack
        spacing={4}
        align="center"
        justify="center"
        height="100vh"
        position="relative"
        zIndex="1"
        color="#4d454c"
        textAlign="center"
      >
        <ResumeLink />
        <Heading as="h1" size="2xl">
          Robert Cronin
        </Heading>
        <Text fontSize="xl">Senior Software Engineer</Text>
        <SocialLinks />
        <Image
          src={avatarUrl}
          alt="Profile Picture"
          height="40%"
          width="auto"
        />
      </VStack>
    </>
  );
};

export default HeroSection;
