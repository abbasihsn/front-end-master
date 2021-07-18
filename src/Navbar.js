import React, { useState } from "react";
import { Link } from "@reach/router";
// import { css } from "@emotion/core";
import { css, keyframes } from "@emotion/core";
import globals from "../globals";

const spin = keyframes`
  to{
    transform:rotate(360deg)
  }
`;

function Navbar() {
  const color = "white";
  const [padding, setPadding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${globals.dark};
        position: top;
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        aria-label="logo"
        role="img"
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
            font-size: 70px;
          }
        `}
      >
        😄
      </span>
    </header>
  );
}

export default Navbar;
