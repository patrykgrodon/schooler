import { Box, TextField } from "@mui/material";

const Search = () => {
  return (
    <Box
      sx={{
        m: 1,
        height: "40px",
        display: "flex",
        alignItems: "center",
      }}>
      <TextField placeholder="Wyszukaj..." fullWidth size="small" />
    </Box>
  );
};

export default Search;
