import { Box, Modal, Typography, TextField, IconButton, Grow } from "@mui/material";
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
        bgcolor: "#2e1b57",
        borderRadius: 3,
        p: 4,
        outline: "none",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
    },
    closeButton: {
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "rotate(90deg)",
        },
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
            closeAfterTransition
        >
            <Grow in={open} timeout={600}>
                <Box sx={styles.container}>
                    <Box sx={styles.header}>
                        <Typography variant="h6">What are you looking for?</Typography>
                        <IconButton aria-label="close" onClick={onClose} sx={styles.closeButton}>
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
            </Grow>
        </Modal>
    );
}

