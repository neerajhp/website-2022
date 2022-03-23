import React from "react";
import { Waypoint } from "react-waypoint";
import { Slide, Fade, Collapse, Grow, Divider } from "@mui/material";
import { Box } from "@mui/system";

interface TextSlideRequiredProps {
  children: React.ReactElement<any, any>;
}

interface TextSlideOptionalProps {
  delay?: number;
  divider?: boolean;
}

interface TextSlideProps
  extends TextSlideRequiredProps,
    TextSlideOptionalProps {}

const defaultProps: TextSlideOptionalProps = { delay: 0, divider: false };

const TextSlide = (props: TextSlideProps) => {
  const [revealed, setRevealed] = React.useState(false);
  const containerRef = React.useRef(null);

  const delayInterval = 100;

  const handleChange = () => {
    if (!revealed) {
      setTimeout(
        () => setRevealed((prev) => !prev),
        props.delay! * delayInterval
      );
    }
  };
  return (
    <Box>
      <Waypoint onEnter={handleChange} />

      {props.divider && (
        <Grow
          in={revealed}
          style={{ transformOrigin: "0", opacity: 1 }}
          {...(revealed ? { timeout: 500 } : {})}
        >
          <Divider sx={{ width: "100%", color: "inherit" }} />
        </Grow>
      )}

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
