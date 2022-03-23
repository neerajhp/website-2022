import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import service from "./service";
import Article from "./Article";

const Blog = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // Get medium articles
    service.getArticles().then((res) => {
      //Delay displaying articles
      setTimeout(() => setArticles(res), 5000);
    });
  }, []);

  //Loading Spinner
  let Content = <Box>Loading...</Box>;

  if (articles.length > 0) {
    console.log(articles);
    Content = (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flexGrow: 1, color: "text.light" }}>
          <Typography variant='h4'>My Blog</Typography>
        </Box>
        <Box sx={{ width: { md: "70%" } }}>
          {articles.map((article, idx) => (
            <Article key={idx} content={article}></Article>
          ))}
        </Box>
      </Box>
    );
  }

  return <Box sx={{ minHeight: { xs: "30vh", md: "50vh" } }}>{Content}</Box>;
};

export default Blog;
