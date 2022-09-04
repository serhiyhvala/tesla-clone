import React from "react";
import {Wrap, ItemText, ButtonGroup, LeftButton, RightButton, DownArrow, Buttons} from '../styles/SectionStyles'
import { Fade } from "react-reveal";

function Section({
  title,
  desciption,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <div>
      <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{desciption}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    </div>
  );
}

export default Section;
