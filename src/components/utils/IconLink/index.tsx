import { Box } from "@mui/system";
import React from "react";

interface IconLinkProps {
  children: React.ReactNode;
  iconUrl?: string;
  alt: string;
  href: string;
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
          "&:hover": {
            path: {
              fill: theme.palette.secondary.main,
              stroke: theme.palette.secondary.main,
            },
          },
        }),
      ]}
      // alt={props.alt}
    >
      <a href={props.href} target='_blank' rel='noreferrer'>
        {props.children}
      </a>
    </Box>
  );
};

export default IconLink;
