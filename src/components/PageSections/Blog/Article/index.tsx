import { Box, Divider, Typography } from "@mui/material";

interface ArticleType {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: {};
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

interface ArticleProps {
  content: ArticleType;
}

const Article = (props: ArticleProps) => {
  return (
    <Box
      sx={{
        "& a": { color: "inherit", textDecoration: "none" },
        "&:hover": {
          color: "secondary.main",
          "& hr": { borderColor: "secondary.main" },
        },
      }}
    >
      <a href={props.content.link} target='_blank' rel='noreferrer'>
        <Divider sx={{ width: "100%", color: "inherit" }} />

        <Typography variant='h3'>{props.content.title}</Typography>
      </a>
    </Box>
  );
};

export default Article;
