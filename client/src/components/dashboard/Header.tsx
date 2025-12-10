import { Box, Typography } from "@mui/material";
import DateRangeInput from "@/components/common/DateRangeInput";
import SearchToggle from './Search/SearchToggle';

const styles = {
  header: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: { xs: 'flex-start', md: 'center' },
    paddingTop: { xs: " 24px" },
    marginBottom: { xs: 16, sm: 20, md: 24 },
    width: '100%',
    gap: { xs: 2, md: 0 },
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: { xs: '28px', sm: '32px', md: '36px' },
    letterSpacing: '0.06em',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 1.5, sm: 2 },
    width: { xs: '100%', md: 'auto' },
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    justifyContent: { xs: 'flex-start', md: 'flex-end' },
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