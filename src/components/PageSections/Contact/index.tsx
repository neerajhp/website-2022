import React from "react";
import { Box } from "@mui/system";
import IconLink from "../../utils/IconLink";
import TextSlide from "../../utils/TextSlide";
import { ReactComponent as MediumIcon } from "../../../assets/medium-ico.svg";
import { ReactComponent as GithubIcon } from "../../../assets/github-ico.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/linkedin-ico.svg";
import { ReactComponent as CoffeeIcon } from "../../../assets/coffee.svg";
import { Paper, Typography } from "@mui/material";

const Contact = () => {
  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: "70%", md: "50%", lg: "30%" },
          position: "absolute",
          transform: "rotate(-20deg)",
          p: { xs: 1.5, md: 3 },
          my: { xs: "6rem", lg: 0 },
          border: "1px solid",
          borderColor: "text.primary",
          color: "neutral.main",
          backgroundColor: "secondary.main",
          "& span": { fontSize: "1.5rem" },
        }}
      >
        <Typography>
          I'm currently giving this site a facelift <span> 👀</span>
        </Typography>
        <br />
        <Typography>
          In the meantime you can get to know me through the following links!
        </Typography>
      </Paper>

      <Box
        sx={{
          height: { xs: "80vh", md: "60vh" },
          width: "100%",
          mt: { xs: "4rem", md: "8rem", lg: "5rem" },
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", md: "40%" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconLink
            alt='Check out my Linkedin'
            href='https://www.linkedin.com/in/neerajhpatel/'
          >
            <TextSlide>
              <LinkedinIcon />
            </TextSlide>
          </IconLink>

          <IconLink
            alt='Check out my GitHub'
            href='https://github.com/neerajhp'
          >
            <TextSlide delay={2}>
              <GithubIcon />
            </TextSlide>
          </IconLink>
          <IconLink
            alt='Check out my Medium Blog'
            href='https://medium.com/@neerajhpatel'
          >
            <TextSlide delay={4}>
              <MediumIcon />
            </TextSlide>
          </IconLink>
          <IconLink
            alt='Lets get a coffee!'
            href='mailto:neerajhpatel@gmail.com'
          >
            <TextSlide delay={6}>
              <CoffeeIcon />
            </TextSlide>
          </IconLink>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
