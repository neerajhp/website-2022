import React from "react";
import { Waypoint } from "react-waypoint";
import { Slide, Fade } from "@mui/material";
import { Box } from "@mui/system";

interface TextSlideRequiredProps {
  children: React.ReactElement<any, any>;
}

interface TextSlideOptionalProps {
  delay?: number;
}

interface TextSlideProps
  extends TextSlideRequiredProps,
    TextSlideOptionalProps {}

const defaultProps: TextSlideOptionalProps = { delay: 0 };

const TextSlide = (props: TextSlideProps) => {
  const [revealed, setRevealed] = React.useState(false);
  const containerRef = React.useRef(null);
  const delayInterval = 100;

  const handleChange = () => {
    setTimeout(
      () => setRevealed((prev) => !prev),
      props.delay! * delayInterval
    );
  };
  return (
    <Box>
      <Waypoint onEnter={handleChange} />
      <Fade in={revealed} timeout={1200}>
        <Box sx={{ overflow: "hidden" }} ref={containerRef}>
          <Slide
            direction='up'
            in={revealed}
            container={containerRef.current}
            timeout={1000}
          >
            {props.children}
          </Slide>
        </Box>
      </Fade>
    </Box>
  );
};

TextSlide.defaultProps = defaultProps;

export default TextSlide;
