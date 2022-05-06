import React, { useMemo } from "react";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeData from "./theme/theme";
import { Typography } from "@mui/material";

function App() {
  const theme = useMemo(() => {
    const themeContent = createTheme(themeData);
    return responsiveFontSizes(themeContent, { disableAlign: true });
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography>Texas Holdem</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
