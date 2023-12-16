"use client";
import { postData } from "@/utils/dataservices";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormProps {}

interface IFormInput {
  title: string;
}

export const Form: FC<FormProps> = () => {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      id:""
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    postData("http://localhost:8000/tasks", data);
    reset();
  };

  return (
    <Container maxWidth="xs">
      <Stack
        alignItems="center"
        marginTop="2rem"
        borderRadius="10px"
        padding="1rem"
        minHeight="30rem"
        sx={(theme) => ({
          boxShadow: theme.shadows[4],
          backgroundImage:
            "linear-gradient(to right top, #89b9ad, #90c0ad, #9ac7ac, #a6ceab, #b3d4a9, #c0d8aa, #cedbac, #dbdfaf, #e8e1b7, #f2e4c1, #fae7cc, #ffebd8)",
        })}
      >
        <Typography variant="h4" gutterBottom>
          Tasks
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row" gap="1rem">
            <Controller name="title" control={control} render={({ field }) => <TextField variant="outlined" size="small" {...field} />} />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default Form;
