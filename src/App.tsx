import { ThemeProvider } from "@mui/material";
import PageBackground from "./components/PageBackground";
import Blog from "./components/PageSections/Blog";
import Navbar from "./components/PageSections/Navbar";
import Contact from "./components/PageSections/Contact";
import Landing from "./components/PageSections/Landing";
import Projects from "./components/PageSections/Projects";
import theme from "./Theme";
import { Box } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageBackground>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <Landing />
        </Box>
        <Projects />
        <Blog />
        <Contact />
      </PageBackground>
    </ThemeProvider>
  );
}

export default App;
