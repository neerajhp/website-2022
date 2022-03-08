import { Box } from "@mui/system";
import PixelMe from "../../../assets/pixelme.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        color: "text.light",
        my: 8,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 48,
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>&lt; &gt;</Box>
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
        <img alt='Pixel Me' src={PixelMe} style={{ height: "100%" }} />{" "}
      </Box>
    </Box>
  );
};

export default Navbar;
