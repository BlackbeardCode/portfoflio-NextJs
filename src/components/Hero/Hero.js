import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { motion } from "framer-motion";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <motion.div
        animate={{ x: 0, opacity: 1, filter: "blur(0)" }}
        initial={{ x: -300, opacity: 0, filter: "blur(1px)" }}
        transition={{ duration: 1 }}
      >
        <SectionTitle main center>
          Hello there! <br />
        </SectionTitle>
        <SectionText>
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -300 }}
            transition={{ duration: 1 }}
          >
            I created this website to archive all the technologies explored in
            my journey to become a Full Stack Developer. If you like to learn
            how to develop amazing website and web applications or just take a
            look at the various projects I created, feel free to browse this
            website!
          </motion.p>
        </SectionText>
        <Button onclick={() => (window.location = "https://google.com")}>
          Learn More
        </Button>
      </motion.div>
    </LeftSection>
  </Section>
);

export default Hero;
