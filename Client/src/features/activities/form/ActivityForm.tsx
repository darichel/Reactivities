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
import DateTimeInput from "../../../app/shared/components/DateTimeInput";
import LocationInput from "../../../app/shared/components/LocationInput";

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
        date: new Date(activity.date),
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
        <DateTimeInput label='Date' control={control} name='date' />
        <LocationInput control={control} name='location' label='Enter the location' />

        <Box display="flex" justifyContent="end" gap={2}>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => reset()}
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
