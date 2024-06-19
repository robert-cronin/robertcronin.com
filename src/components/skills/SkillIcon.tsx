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

import { Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type SkillIconProps = { name: string; icon: IconType; width?: string };

const SkillIcon = ({ icon, width }: SkillIconProps) => {
  return (
    <Box width={width} >
      <Box
        as={motion.div}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        padding={4}
        bg="gray.500"
        borderRadius="md"
        margin={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        minWidth="100px"
        width={width}
      >
        <Icon as={icon} w={10} h={10} />
      </Box>
    </Box>
  );
};

export default SkillIcon;
export type { SkillIconProps };
