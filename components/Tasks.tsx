import { IconButton, Stack, TextField } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
interface TasksProps {
  data: any;
}
type data = {
  title: string;
  id: number;
};

export const Tasks: FC<TasksProps> = ({ data }) => {
  
  return (
    <Stack marginTop="1.5rem" gap="1rem">
      {data.map(({ title, id }: data) => (
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap="1rem" key={id}>
          <TextField value={title} size="small" variant="standard" />
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  );
};
