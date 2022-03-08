import { ThemeProvider } from "@mui/material";
import PageBackground from "./components/PageBackground";

import Navbar from "./components/PageSections/Navbar";
import Contact from "./components/PageSections/Contact";
import Landing from "./components/PageSections/Landing";

import Footer from "./components/PageSections/Footer";
import theme from "./Theme";
import { Box } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageBackground>
        <Box
          sx={{
            minHeight: { xs: "70vh", md: "100vh", xl: "80vh" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <Landing />
        </Box>

        <Contact />
        <Box sx={{ position: "absolute", left: 0, right: 0 }}>
          <Footer />
        </Box>
      </PageBackground>
    </ThemeProvider>
  );
}

export default App;
