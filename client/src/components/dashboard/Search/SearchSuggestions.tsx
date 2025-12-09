import { Box, Typography } from "@mui/material";

// Ideally this would be an API call to get suggested searches
const suggestions = ['recommendations', 'risk score', 'critical exposures', 'policy compliance'];

export function SearchSuggestions() {
    return (
        <Box sx={{ m: 2 }}>
            {suggestions.map((search) => (
                <Typography
                    key={search}
                    variant="body2"
                    sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
                    onClick={() => console.log(search)}
                >
                    {search}
                </Typography>
            ))}
        </Box>
    );
}

