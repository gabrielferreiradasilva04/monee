import { InputBase, Paper, IconButton } from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";

export default function SearchBar({ placeholder = "Filtrar...", onChange }) {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        p: "2px 8px",
        borderRadius: 2,
        boxShadow: 0,
        bgcolor: "background.default",
      }}
    >
      <IconButton>
        <FilterList />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={onChange}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}
