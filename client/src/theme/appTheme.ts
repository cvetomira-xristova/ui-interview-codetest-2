import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f188a", // Main purple
      light: "#783ebd", // Lighter purple
      dark: "#361376", // Darker purple
      contrastText: "#ffffff", // White text on purple
    },
    secondary: {
      main: "#6B1376", // Secondary purple
      light: "#4926ae", // Light purple
      dark: "#080709", // Dark purple
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff", // Main text color
      secondary: "rgba(255, 255, 255, 0.7)", // Secondary text
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
            radial-gradient(circle at 100% 100%, #705193 30%, transparent 70%),
            #19133c
          `,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 'thin',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.15)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
          },
        },
      },
    },
  },
});
