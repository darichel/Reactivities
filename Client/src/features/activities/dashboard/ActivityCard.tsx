import { Delete } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
  activity: Activity
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityCard({ activity, selectActivity, deleteActivity }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date.toString()}</Typography>
        <Typography variant="subtitle1" >{activity.description} / {activity.venue}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
        <Chip label={activity.category} variant="outlined" />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button size="medium" variant="contained" onClick={() => selectActivity(activity.id)}>View</Button>
          <Button size="medium" color="error" variant="contained" startIcon={<Delete />} onClick={() => deleteActivity(activity.id)}>Delete</Button>
        </Box>
      </CardActions>
    </Card>
  )
}