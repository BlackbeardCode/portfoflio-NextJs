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
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider colorAlt style={{ marginTop: 10 }} />
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiHtml5 size="5rem" />
        </picture>
        <ListTitle>Html5</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiCss3 size="5rem" />
        </picture>
        <ListTitle>Css3</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiJavascript size="5rem" />
        </picture>
        <ListTitle>JavaScript</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiNodeDotJs size="5rem" />
        </picture>
        <ListTitle>NodeJs</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiReact size="5rem" />
        </picture>
        <ListTitle>React</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiNextDotJs size="5rem" />
        </picture>
        <ListTitle>NextJs</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiTailwindcss size="5rem" />
        </picture>
        <ListTitle>Tailwind</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiMaterialUi size="5rem" />
        </picture>
        <ListTitle>MaterialUi</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiBootstrap size="5rem" />
        </picture>
        <ListTitle>SiBootstrap</ListTitle>
      </ListItem>
      <ListItem>
        <picture>
          <SiGit size="5rem" />
        </picture>
        <ListTitle>Git</ListTitle>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
