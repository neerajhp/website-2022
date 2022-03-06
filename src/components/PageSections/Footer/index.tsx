import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <React.Fragment>
      <Divider />
      <Box
        sx={{
          py: { xs: 2, md: 2 },
          px: { xs: 1.5, md: 2 },
          display: "flex",
          justifyContent: "space-between",
          color: "text.light",
        }}
      >
        <Typography variant='body1'>
          Made with <span>❤️</span>
        </Typography>
        <Typography variant='body1'>2022</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
