import { Box } from "@mui/material";
import logoImage from "@/assets/logo.png";

const logoStyles = {
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pt: { xs: 2, sm: 3, md: 4 },
  },
  logoImage: {
    maxWidth: { xs: "80%", sm: "85%", md: "100%" },
    height: "auto",
  },
};

export const Logo = () => (
  <Box sx={logoStyles.logo}>
    <Box component="img" src={logoImage} alt="Logo" sx={logoStyles.logoImage} />
  </Box>
);

