import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#19133c", // Fallback bg color
    },
  },
  typography: {
    fontFamily:
      '"Mona Sans", "Instrument Sans", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(circle at 0% 0%, #19133c 15%, transparent 40%),
            radial-gradient(circle at 100% 0%, #080709 15%, transparent 50%),
            radial-gradient(circle at 0% 100%, #4926ae 20%, transparent 60%),
            radial-gradient(circle at 100% 100%, #705193 0%, transparent 65%),
            #19133c
          `,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
  },
});
