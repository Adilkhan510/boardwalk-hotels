import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor, setRem } from "../../helperFunctionsStyles";

const Banner = ({ title, className, children, greeting, text }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
      </div>
      {children}
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(38)};
  letter-spacing: 3px;
  max-width: ${setRem(800)};
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
    padding: ${setRem(20)};
  }
  @media (min-width: 768px) {
    width: 70vw;
    border: 6px solid ${setColor.primaryColor};
    p {
      width: 75%;
    }
  }
`;

export default BannerWrapper;
