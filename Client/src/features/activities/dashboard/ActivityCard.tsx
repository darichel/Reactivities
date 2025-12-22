import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    activity : Activity
    selectActivity: (id: string) => void;
}

export default function ActivityCard({activity, selectActivity}: Props) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography sx={{color: 'text.secondary', mb: 1}}>{activity.date.toString()}</Typography>
            <Typography variant="subtitle1" >{activity.description} / {activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2}}>
            <Chip label={activity.category} variant="outlined"/>
            <Button size="medium" variant="contained" onClick={() => selectActivity(activity.id)}>View</Button>
        </CardActions>
    </Card>
  )
}