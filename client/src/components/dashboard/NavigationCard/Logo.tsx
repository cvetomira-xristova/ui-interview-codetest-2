import { Box } from "@mui/material";
import logoImage from "@/assets/logo.png";

const logoStyles = {
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pt: 4,
  },
};

export const Logo = () => (
  <Box sx={logoStyles.logo}>
    <Box component="img" src={logoImage} alt="Logo" />
  </Box>
);

