import { Box } from "@mui/system";
import IconLink from "../../utils/IconLink";
import { ReactComponent as MediumIcon } from "../../../assets/medium-ico.svg";
import { ReactComponent as GithubIcon } from "../../../assets/github-ico.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/linkedin-ico.svg";
import { ReactComponent as CoffeeIcon } from "../../../assets/coffee.svg";

const Contact = () => {
  return (
    <Box
      sx={{
        height: { xs: "40vh", md: "60vh", lg: "60vh", xl: "60vh" },
        width: "100%",
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
        <IconLink alt='Check out my Linkedin'>
          <LinkedinIcon />
        </IconLink>
        <IconLink alt='Check out my GitHub'>
          <GithubIcon />
        </IconLink>
        <IconLink alt='Check out my Medium Blog'>
          <MediumIcon />
        </IconLink>
        <IconLink alt='Lets get a coffee!'>
          <CoffeeIcon />
        </IconLink>
      </Box>
    </Box>
  );
};

export default Contact;
