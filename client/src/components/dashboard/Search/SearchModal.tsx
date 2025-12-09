import { Box, Modal, Typography, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SearchSuggestions } from './SearchSuggestions';

interface SearchModalProps {
    open: boolean;
    onClose: () => void;
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

const styles = {
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        position: "relative",
        minWidth: "50%",
        bgcolor: "rgba(20, 20, 30, 0.95)",
        borderRadius: 3,
        p: 4,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
    },
};

export function SearchModal({ open, onClose, searchQuery, onSearchChange }: SearchModalProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
        console.log(e.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={styles.modal}
        >
            <Box sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h6">What are you looking for?</Typography>
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <TextField
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                    autoFocus
                    fullWidth
                />
                <SearchSuggestions />
            </Box>
        </Modal>
    );
}

