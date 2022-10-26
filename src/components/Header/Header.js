//Link allows us to link a page or section
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <Span>BlackBeardCode</Span> <DiCode size="3rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>Tech</NavLink>
      </Link>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#contact">
        <NavLink>Contact</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
