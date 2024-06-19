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

import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    50: "#f7f7f7",
    100: "#e1e1e1",
    200: "#cccccc",
    300: "#b7b7b7",
    400: "#a2a2a2",
    500: "#8c8c8c",
    600: "#767676",
    700: "#616161",
    800: "#4b4b4b",
    900: "#363636",
  },
};
const theme = extendTheme({
  colors,
});

export default theme;
