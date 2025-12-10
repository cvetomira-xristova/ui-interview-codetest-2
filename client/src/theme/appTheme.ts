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
    // @ts-expect-error - MuiDataGrid is from @mui/x-data-grid and needs module augmentation
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          backgroundColor: 'transparent',
          fontFamily: '"Instrument Sans", "Helvetica", "Arial", sans-serif',
          '& .MuiDataGrid-main': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderRight: 'none',
            borderLeft: 'none',
            borderTop: 'none',
            padding: '12px 16px',
            color: '#FFFFFF',
            backgroundColor: 'transparent',
            display: 'flex',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            '&:focus': {
              outline: 'none',
            },
            '&:focus-within': {
              outline: 'none',
            },
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#544182',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            '& .MuiDataGrid-columnHeader': {
              padding: '12px 16px',
              borderRight: 'none',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              backgroundColor: 'transparent',
              '&:focus': {
                outline: 'none',
              },
              '&:focus-within': {
                outline: 'none',
              },
              '&:hover': {
                opacity: 0.9,
                // backgroundColor: ')',
              },
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontFamily: '"Instrument Sans"',
              fontSize: '11px',
              fontWeight: 600,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            },
            '& .MuiDataGrid-iconButtonContainer': {
              '& .MuiIconButton-root': {
                color: '#FFFFFF',
                padding: '4px',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '16px',
                  color: '#FFFFFF',
                },
              },
            },
            '& .MuiDataGrid-sortIcon': {
              color: '#FFFFFF',
              backgroundColor: 'transparent',
            },
          },
          '& .MuiDataGrid-row': {
            border: 'none',
            backgroundColor: 'transparent',
            '&:hover': {
              opacity: 0.8,
              cursor: 'pointer',
            },
            '&.even-row': {
              backgroundColor: '#2e1b57',
            },
            '&.odd-row': {
              backgroundColor: '#392664',
            },
          },
        },
      },
    },
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
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        bar: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
        wave: {
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
          },
        },
      },
    },
  },
});
