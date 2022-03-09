import { Box } from "@mui/material";

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
  return <Box>{props.content.title}</Box>;
};

export default Article;
