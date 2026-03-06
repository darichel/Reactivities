import { useState } from "react";
import  { useController, type FieldValues, type UseControllerProps,  } from "react-hook-form";
import type { LocationIQSuggesstion } from "../../../lib/types/index.d.ts";
import {
  Box,
  List,
  ListItemButton,
  TextField,
  Typography,
} from "@mui/material";

type Props<T extends FieldValues> = {
    label: string;
} & UseControllerProps<T>;

export default function LocationInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({ ...props });
  const [loading, setLoadinf] = useState(false);
  const [suggestions, setSuggestions] = useState<LocationIQSuggesstion[]>([]);

  return (
    <Box>
      <TextField
        {...props}
        {...field}
        fullWidth
        variant="outlined"
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
      {loading && <Typography>Loading...</Typography>}
      {suggestions.length > 0 && (
        <List sx={{ border: 1 }}>
          {suggestions.map((suggestion) => (
            <ListItemButton divider key={suggestion.place_id}>
                {suggestion.display_name}
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
}
