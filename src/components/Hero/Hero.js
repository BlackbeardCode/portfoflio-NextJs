import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Hero = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: -200, opacity: 0 });
    }
    console.log('inView: ', inView);
  }, [inView]);

  return (
    <Section row nopadding>
      <LeftSection>
        <motion.div animate={animation}>
          <SectionTitle main center>
            Hello there! <br />
          </SectionTitle>
          <SectionText>
            <motion.p
              style={{
                minHeight: '18vh',
                minWidth: '30vw',
                maxWidth: '85vw',
                marginRight: '20vw',
              }}
              animate={animation}
            >
              <Typed
                strings={[
                  'I created this website to archive all the technologies explored in my journey on the road to become a Full Stack Developer.',
                  'If you like to learn how to develop amazing website and web applications or just take a look at the various projects I created, feel free to browse this website!',
                ]}
                typeSpeed={25}
                backSpeed={0}
                loop
              />
            </motion.p>
          </SectionText>
          <Button onclick={() => (window.location = 'https://google.com')}>
            Learn More
          </Button>
        </motion.div>
      </LeftSection>
      <SectionDivider ref={ref} style={{ visibility: 'hidden' }} />
    </Section>
  );
};

export default Hero;
