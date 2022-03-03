import { ThemeProvider } from "@mui/material";
import PageBackground from "./components/PageBackground";
import Blog from "./components/PageSections/Blog";
import Contact from "./components/PageSections/Contact";
import Landing from "./components/PageSections/Landing";
import Projects from "./components/PageSections/Projects";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageBackground>
        <Landing />
        <Projects />
        <Blog />
        <Contact />
      </PageBackground>
    </ThemeProvider>
  );
}

export default App;
