import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import background from "./assets/background.png";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage?.getItem("lightMode") === "true" ? true : false
  );

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const changeMode = () => {
    localStorage.setItem("lightMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

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
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            <Typography>{isDarkMode ? "Escuro" : "Claro"}</Typography>
            <Switch checked={isDarkMode} onChange={changeMode} />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
