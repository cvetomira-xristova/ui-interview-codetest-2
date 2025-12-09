import { Box, Typography } from "@mui/material";
import DateRangeInput from "@/components/common/DateRangeInput";
import SearchToggle from './Search/SearchToggle';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: '36px',
    letterSpacing: '0.06em',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
};

const Header = () => {
  return (
    <Box sx={styles.header}>
      <Typography
        color="text.primary"
        component="h1"
        sx={styles.headerTitle}
      >
        HOME
      </Typography>
      <Box sx={styles.headerActions}>
        <DateRangeInput />
        <SearchToggle />
      </Box>
    </Box>
  );
};

export default Header;