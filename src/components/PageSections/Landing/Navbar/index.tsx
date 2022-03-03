import { Box } from "@mui/system";
import BlogIcon from "../../../../assets/blog.svg";
import LaptopIcon from "../../../../assets/laptop.svg";
import CoffeeIcon from "../../../../assets/coffee.svg";

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
        <Box
          component='img'
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 50 },
            maxWidth: { xs: 50 },
          }}
          alt='Link to my projects'
          src={LaptopIcon}
        />
        <Box
          component='img'
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 50 },
            maxWidth: { xs: 50 },
          }}
          alt='Link to my projects'
          src={BlogIcon}
        />
        <Box
          component='img'
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 50 },
            maxWidth: { xs: 50 },
          }}
          alt='Link to my projects'
          src={CoffeeIcon}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
