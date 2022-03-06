import { Box } from "@mui/system";
import IconLink from "../../utils/IconLink";
import MediumIcon from "../../../assets/medium-ico.svg";
import GithubIcon from "../../../assets/github-ico.svg";
import LinkedinIcon from "../../../assets/linkedin-ico.svg";
import CoffeeIcon from "../../../assets/coffee.svg";

const Contact = () => {
  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "60vh", lg: "60vh", xl: "60vh" },
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { xs: "2.75rem", md: "4rem" },
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconLink iconUrl={LinkedinIcon} />
        <IconLink iconUrl={GithubIcon} />
        <IconLink iconUrl={MediumIcon} />
        <IconLink iconUrl={CoffeeIcon} />
      </Box>
    </Box>
  );
};

export default Contact;
