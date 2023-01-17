import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: bedo2boy@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/abdlla-nasser",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abdallah-salem-a65601121/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/abdalanasser_",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {socials.map(site => (
                <a href={site.url}><FontAwesomeIcon icon={site.icon} size="2px" /></a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={() => handleClick("projects")} href="#projects">Projects</a>
              <a onClick={() => handleClick("contact-me")} href="#contact-me">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
