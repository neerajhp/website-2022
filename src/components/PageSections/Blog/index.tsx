import { Box } from "@mui/material";
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
      <Box>
        {articles.map((article, idx) => (
          <Article key={idx} content={article}></Article>
        ))}
      </Box>
    );
  }

  return <Box sx={{ minHeight: { xs: "30vh", md: "50vh" } }}>{Content}</Box>;
};

export default Blog;
