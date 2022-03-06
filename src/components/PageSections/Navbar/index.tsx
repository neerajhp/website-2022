import { Box } from "@mui/system";
import IconLink from "../../utils/IconLink";
import { ReactComponent as LaptopIcon } from "../../../assets/laptop.svg";
import { ReactComponent as CoffeeIcon } from "../../../assets/coffee.svg";
import { ReactComponent as BlogIcon } from "../../../assets/blog.svg";

const Navbar = () => {
  return (
    <Box
      sx={{
        my: 8,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 48,
      }}
    >
      <Box>&lt;&gt;</Box>
      <Box
        sx={{
          width: {
            md: "30%",
            lg: "20%",
          },
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        <IconLink alt='Link to my projects'>
          <LaptopIcon />
        </IconLink>
        <IconLink alt='Link to my articles'>
          <BlogIcon />
        </IconLink>
        <IconLink alt='Link to my contact details'>
          <CoffeeIcon />
        </IconLink>
      </Box>
    </Box>
  );
};

export default Navbar;
