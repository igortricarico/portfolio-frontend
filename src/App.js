import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import background from "./assets/images/background.png";
import NavBar from "./components/NavBar/NavBar";
import { Grid2, Link, Typography } from "@mui/material";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage?.getItem("lightMode") === "true" ? true : false
  );

  const changeMode = () => {
    localStorage.setItem("lightMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <NavBar isDarkMode={isDarkMode} onChangeDarkMode={changeMode} />
        <Grid2
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            padding: "2px 5px 2px 5px",
          }}
        >
          <Typography>
            <Link
              href="https://www.flickr.com/photos/nasawebbtelescope/54088897300/in/album-72177720313923911"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#000000" }}
            >
              Imagem de JWST
            </Link>
          </Typography>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
