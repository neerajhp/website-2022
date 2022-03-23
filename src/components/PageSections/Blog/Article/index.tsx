import { Box, Divider, Typography } from "@mui/material";
import TextSlide from "../../../utils/TextSlide";

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
        height: { xs: 50, md: 100 },
        p: { xs: 1, md: 2 },
        "& h3": {
          pl: 0.5,
          pt: 0.5,
        },
        "& a": { color: "inherit", textDecoration: "none" },
        "&:hover": {
          color: "secondary.main",
          "& hr": { borderColor: "secondary.main" },
          "& h3": {
            pl: 0,
            pt: 0,
          },
        },
      }}
    >
      <a href={props.content.link} target='_blank' rel='noreferrer'>
        <TextSlide divider={true}>
          <Typography variant='h3'>{props.content.title}</Typography>
        </TextSlide>
      </a>
    </Box>
  );
};

export default Article;
