import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import PixelMe from "../../../assets/pixelme.png";
import TextSlide from "../../utils/TextSlide";

const Landing = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <TextSlide>
          <Typography
            variant='h3'
            sx={{ pl: 2, color: "secondary.main", fontSize: { md: "3.75rem" } }}
          >
            Hi there <span>👋</span>
          </Typography>
        </TextSlide>

        <TextSlide delay={8}>
          <Typography
            variant='h2'
            sx={{ color: "primary.contrastText", fontSize: { md: "6rem" } }}
          >
            I'm <b>Neeraj</b>, a developer based in Melbourne
          </Typography>
        </TextSlide>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: { xs: 4, md: 4, lg: 4, xl: 4 },
          }}
        >
          <Divider
            sx={{
              borderColor: "primary.contrastText",
              width: {
                xs: "40%",
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
            }}
          />
          <Box
            sx={{
              height: {
                xs: "8rem",
                md: 48,
                lg: 64,
                xl: 64,
              },
            }}
          >
            <img
              alt='Pixel Me'
              src={PixelMe}
              style={{ height: "100%", transform: "rotate(20deg)" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
