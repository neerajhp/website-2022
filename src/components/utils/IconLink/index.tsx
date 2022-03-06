import { Box } from "@mui/system";
import React from "react";

interface IconLinkProps {
  children: React.ReactNode;
  iconUrl?: string;
  alt: string;
}

const IconLink = (props: IconLinkProps) => {
  return (
    <Box
      sx={[
        {
          svg: {
            height: { xs: "2.75rem", md: "3rem", lg: "4rem" },
            width: "auto",
          },
        },
        (theme) => ({
          "&:hover": { path: { fill: theme.palette.secondary.main } },
        }),
      ]}
      // alt={props.alt}
    >
      {props.children}
    </Box>
  );
};

export default IconLink;
