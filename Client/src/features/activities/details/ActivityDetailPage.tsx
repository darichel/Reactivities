import {
  Grid,
  Typography,
} from "@mui/material";
import {  useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailSidebar from "./ActivityDetailSidebar";
import ActivityDetailHeader from "./ActivityDetailHeader";

export default function ActivityDetailPage() {
  //const navigate = useNavigate();
  const {id} = useParams();
  const {activity, isActivityLoading} = useActivities(id);
 
  if (isActivityLoading) return <Typography>Loading...</Typography>;
  if (!activity) return <Typography>Activity not found</Typography>;
  return (
    // <Card sx={{ borderRadius: 3 }}>
    //   <CardMedia
    //     component="img"
    //     src={`/images/categoryImages/${activity.category}.jpg`}
    //   />
    //   <CardContent>
    //     <Typography variant="h5">{activity.title}</Typography>
    //     <Typography variant="subtitle1" fontWeight="light">
    //       {new Date(activity.date).toISOString().split("T")[0]}
    //     </Typography>
    //     <Typography variant="body1">{activity.description}</Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button
    //       color="primary"
    //       component={Link}
    //       to={`/manage/${activity.id}`}
    //     >
    //       Edit
    //     </Button>
    //     <Button color="inherit" onClick={() => navigate('/activities')}>
    //       Cancel
    //     </Button>
    //   </CardActions>
    // </Card>
    <Grid container spacing={3}>
      <Grid  size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid>
      <Grid  size={4}>
        <ActivityDetailSidebar />
      </Grid>
    </Grid>
  );
}
