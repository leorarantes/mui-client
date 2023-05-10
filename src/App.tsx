import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import AlertContext from "./contexts/AlertContext";
import Home from "./pages/Home";
import MainApp from "./components/MainApp";
import NewClient from "./pages/NewClient";
import ClientsList from "./pages/ClientsList";

function App() {
  const [alertContext, setAlertContext] = useState(null);

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
    <AlertContext.Provider value={{alertContext, setAlertContext}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/app" element={<MainApp />}>
              <Route path="/app/novo-cliente/:step" element={<NewClient />} />
              <Route path="/app/clientes" element={<ClientsList />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </AlertContext.Provider>
  );
}

export default App;
