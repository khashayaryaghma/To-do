import { TextField } from "@mui/material";
import { FC } from "react";

interface TasksProps {
  data: any;
}

export const Tasks: FC<TasksProps> = ({ data }) => {
  return (
    <>
      {data.map(() => (
        <TextField />
      ))}
    </>
  );
};
