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

import { Button, useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Button
        onClick={toggleColorMode}
        variant="link"
        size="lg"
        color={colorMode === "light" ? "gray.800" : "gray.50"}
        leftIcon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
      />
    </Container>
  );
};

export default ColorModeToggle;
