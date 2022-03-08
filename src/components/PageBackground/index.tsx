import { Container, Box } from "@mui/material";
import Noise from "./Noise";

const PageBackground = (props: any) => {
  return (
    <Container
      sx={{
        display: "flex",
      }}
    >
      <Noise />
      <Box
        sx={{
          zIndex: 10,
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        {props.children}
      </Box>
    </Container>
  );
};

export default PageBackground;
