import { useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import FilterListIcon from '@mui/icons-material/FilterList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const styles = {
  wrapper: {
    position: "relative",
    padding: { xs: "0 8px", sm: "0 10px", md: "0 10px" },
    borderRadius: "50px",
    background: "radial-gradient(ellipse at top right, #c6c5c6 0%, #908d90 98.6%)",
    boxShadow: [
      "6px 19px 22px rgba(0, 0, 0, 0.05)",
      "25px 76px 40px rgba(0, 0, 0, 0.04)",
      "57px 172px 54.5px rgba(0, 0, 0, 0.03)",
      "101px 306px 64.5px rgba(0, 0, 0, 0.01)",
      "inset 0 1px 1px rgba(255, 255, 255, 0.45)",
    ].join(", "),
    transition: "all 0.3s ease-in-out",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#c6c5c6",
      mixBlendMode: "color",
      borderRadius: "inherit",
      zIndex: 0,
    },
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: [
        "6px 19px 22px rgba(0, 0, 0, 0.05)",
        "25px 76px 40px rgba(0, 0, 0, 0.04)",
        "57px 172px 54.5px rgba(0, 0, 0, 0.03)",
        "101px 306px 64.5px rgba(0, 0, 0, 0.01)",
        "inset 0 1px 1px rgba(255, 255, 255, 0.45)",
        "0 4px 12px rgba(199, 35, 220, 0.4)",
      ].join(", "),
    },
    "& .MuiPickersInputBase-root": {
      fontSize: { xs: "12px", sm: "13px", md: "14px" },
      color: "#0A0A22 !important",
    },
    "& .MuiIconButton-root": {
      color: "#0A0A22 !important",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px !important",
    },
    "& .MuiPickersOutlinedInput-notchedOutline": {
      border: "none !important",
      display: "none !important",
      fontSize: "14px",
    },
    "& fieldset.MuiPickersOutlinedInput-notchedOutline": {
      border: "none !important",
      display: "none !important",
    },
  },
};

const DateRangeInput = () => {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    dayjs('2025-09-08'),
    dayjs('2025-09-12')
  ]);

  return (
    <Box sx={styles.wrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          slots={{ openPickerIcon: FilterListIcon }}
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangeInput;