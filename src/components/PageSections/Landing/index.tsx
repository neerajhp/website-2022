import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextSlide from "../../utils/TextSlide";

const Landing = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
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
            sx={{ color: "text.primary", fontSize: { md: "6rem" } }}
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
              borderColor: "text.light",
              width: {
                xs: "40%",
                md: "40%",
                lg: "40%",
                xl: "40%",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
