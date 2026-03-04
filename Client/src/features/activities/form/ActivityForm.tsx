import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useForm, type FieldValues } from "react-hook-form";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
  activitySchema,
  type ActivitySchema,
} from "../../../lib/schemas/activitySchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ActivityForm() {
  const { register, reset, handleSubmit, formState: {errors} } = useForm<ActivitySchema>({
    resolver: zodResolver(activitySchema),
  });
  const { id } = useParams();
  const { updateActivity, createdActivity, activity, isActivityLoading } =
    useActivities(id);
  useEffect(() => {
    if (activity) reset(activity);
  }, [activity, reset]);

  const onSubmit = (data: FieldValues) => {
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
        <TextField
          {...register("title")}
          label="Title"
          error={!!errors.title}
          defaultValue={activity?.title}
          helperText={errors.title ? errors.title.message : ""}
        />
        <TextField
          {...register("description")}
          label="Description"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          {...register("category")}
          label="Category"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
        />
        <TextField
          {...register("city")}
          label="City"
          defaultValue={activity?.city}
        />
        <TextField
          {...register("venue")}
          label="Venue"
          defaultValue={activity?.venue}
        />
        <Box display="flex" justifyContent="end" gap={2}>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => navigate(`/activities/${activity?.id}`)}
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
