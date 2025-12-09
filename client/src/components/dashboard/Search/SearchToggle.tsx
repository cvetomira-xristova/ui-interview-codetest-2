import { useState } from "react";
import { Box } from "@mui/material";
import { GradientButton } from '../../common/GradientButton';
import { SearchModal } from './SearchModal';

export default function SearchToggle() {
  const [open, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSearchQuery("");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <GradientButton onClick={toggleModal}>
        Search
      </GradientButton>
      <SearchModal
        open={open}
        onClose={toggleModal}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </Box>
  );
}