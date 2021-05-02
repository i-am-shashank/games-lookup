import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function Nav() {
  return (
    <Wrapper>
      Games L<p>oo</p>kup
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  p {
    font-weight: 700;
    color: #f50057;
  }
`;
