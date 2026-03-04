import { Box, Button, Paper, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
  activitySchema,
  type ActivitySchema,
} from "../../../lib/schemas/activitySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./categoryOption";

export default function ActivityForm() {
  const {
    reset,
    control,
    handleSubmit,
  } = useForm<ActivitySchema>({
    mode: "onTouched",
    resolver: zodResolver(activitySchema),
  });
  const { id } = useParams();
  const { updateActivity, createdActivity, activity, isActivityLoading } =
    useActivities(id);
  useEffect(() => {
    if (activity) {
      reset({
        ...activity,
        date: new Date(activity.date).toISOString().split("T")[0],
      });
    }
  }, [activity, reset]);

  const onSubmit = (data: ActivitySchema) => {
    console.log(data);
  };

  if (isActivityLoading) return <Typography>Loading...</Typography>;

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? "Edit Activity" : "Create Activity"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextInput label='Title' control={control} name='title' />
        <TextInput label='Description' control={control} name='description' />
        <SelectInput items={categoryOptions} label='Category' control={control} name='category' />
        <TextInput label='Date' control={control} name='date' />
        <TextInput label='City' control={control} name='city' />
        <TextInput label='Venue' control={control} name='venue' />

        <Box display="flex" justifyContent="end" gap={2}>
          <Button
            color="inherit"
            variant="outlined"
            /* onClick={() => navigate(`/activities/${activity?.id}`)} */
          >
            Cancel
          </Button>
          <Button
            color="success"
            variant="contained"
            type="submit"
            disabled={updateActivity.isPending || createdActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
