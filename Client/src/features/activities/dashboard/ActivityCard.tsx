import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const { deletedActivity } = useActivities();

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date.toString()}
        </Typography>
        <Typography variant="subtitle1">
          {activity.description} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            component={Link}
            to={`/activities/${activity.id}`}
            size="medium"
            variant="contained"
          >
            View
          </Button>
          <Button
            size="medium"
            color="error"
            variant="contained"
            startIcon={<Delete />}
            onClick={() => deletedActivity.mutate(activity.id)}
            disabled={deletedActivity.isPending}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
