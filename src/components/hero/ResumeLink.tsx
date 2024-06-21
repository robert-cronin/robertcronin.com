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

import { Link } from "@chakra-ui/react";

const ResumeLink = () => {
  const url =
    "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/robert-cronin/resume/main/resume.pdf";
  return (
    <Link
      href={url}
      position="absolute"
      top="20px"
      right="20px"
      padding="10px 20px"
      backgroundColor="customGray.200"
      color="customGray.900"
      borderRadius="md"
      fontWeight="bold"
      _hover={{ backgroundColor: "customGray.300", textDecoration: "none" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </Link>
  );
};

export default ResumeLink;
