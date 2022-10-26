import React from "react";
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiNodeDotJs,
  SiNextDotJs,
  SiMaterialUi,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem, ListTitle } from "./TechnologiesStyles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Technologies = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: -400, opacity: 0, filter: "blur(0.2px)" });
    }
    console.log("inView: ", inView);
  }, [inView]);

  return (
    <Section id="tech">
      <SectionTitle>Technologies</SectionTitle>
      <SectionDivider colorAlt style={{ marginTop: 10 }} />
      <SectionText ref={ref}>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiHtml5 size="7rem" />
            </picture>
            <ListTitle>Html5</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiCss3 size="7rem" />
            </picture>
            <ListTitle>Css3</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiJavascript size="7rem" />
            </picture>
            <ListTitle>JavaScript</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiNodeDotJs size="7rem" />
            </picture>
            <ListTitle>NodeJs</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiReact size="7rem" />
            </picture>
            <ListTitle>React</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiNextDotJs size="7rem" />
            </picture>
            <ListTitle>NextJs</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiTailwindcss size="7rem" />
            </picture>
            <ListTitle>Tailwind</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiMaterialUi size="7rem" />
            </picture>
            <ListTitle>MaterialUi</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiBootstrap size="7rem" />
            </picture>
            <ListTitle>SiBootstrap</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiGit size="7rem" />
            </picture>
            <ListTitle>Git</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiMysql size="7rem" />
            </picture>
            <ListTitle>MySql</ListTitle>
          </ListItem>
        </motion.div>
        <motion.div animate={animation}>
          <ListItem>
            <picture>
              <SiMongodb size="7rem" />
            </picture>
            <ListTitle>MongoDB</ListTitle>
          </ListItem>
        </motion.div>
      </List>
    </Section>
  );
};

export default Technologies;
