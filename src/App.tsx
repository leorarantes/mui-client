import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainApp from "./components/MainApp";

function App() {
  const theme = createTheme({
    palette: {
      background: { default: "#ffffff", paper: "#ffffff" }
    },
    typography: {
      fontFamily: "Poppins"
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          div {
            padding: 0px;
          }
        `,
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<MainApp />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
