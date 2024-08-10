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
import React from "react";
import avatarUrl from "@/assets/avatar.png";
import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import SocialLinks from "@/components/hero/SocialLinks";
import ParticleFieldBackground from "@/components/hero/ParticleFieldBackground";

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" height="100vh">
      <ParticleFieldBackground />
      <VStack
        spacing={4}
        align="center"
        justify="center"
        height="100%"
        position="relative"
        zIndex="1"
        textAlign="center"
      >
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
    </Box>
  );
};

export default HeroSection;
