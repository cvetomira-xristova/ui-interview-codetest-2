import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const styles = {
  button: {
    background: "radial-gradient(ellipse at top right, #C723DC 0%, #6B1376 51.4%, #361376 98.6%)",
    position: "relative",
    color: "white",
    textTransform: "none",
    fontWeight: 500,
    padding: "12px 24px",
    borderRadius: "50px",
    border: "none",
    boxShadow: `
      6px 19px 22px rgba(0, 0, 0, 0.05),
      25px 76px 40px rgba(0, 0, 0, 0.04),
      57px 172px 54.5px rgba(0, 0, 0, 0.03),
      101px 306px 64.5px rgba(0, 0, 0, 0.01),
      inset 0 1px 1px rgba(255, 255, 255, 0.45)
    `,
    transition: "all 0.3s ease-in-out",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#5734AC",
      opacity: 0.77,
      mixBlendMode: "color",
      borderRadius: "inherit",
      pointerEvents: "none",
    },
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: `
        6px 19px 22px rgba(0, 0, 0, 0.05),
        25px 76px 40px rgba(0, 0, 0, 0.04),
        57px 172px 54.5px rgba(0, 0, 0, 0.03),
        101px 306px 64.5px rgba(0, 0, 0, 0.01),
        inset 0 1px 1px rgba(255, 255, 255, 0.45),
        0 4px 12px rgba(199, 35, 220, 0.4)
      `,
    },
    "&:disabled": {
      background: "rgba(255, 255, 255, 0.1)",
      color: "rgba(255, 255, 255, 0.3)",
      boxShadow: "none",
      "&::before": {
        display: "none",
      },
    },
  },
};

export function GradientButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} sx={styles.button}>
      {children}
    </Button>
  );
}
