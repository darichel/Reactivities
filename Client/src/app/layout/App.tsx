import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useQuery } from '@tanstack/react-query';

function App() {

  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     .then(response => setActivities(response.data));
  //   return () => { }
  // }, []);

  //Now use tanstack query librari
  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await axios.get<Activity[]>('https://localhost:5001/api/activities');
      return response.data;
    }
  })

  const handledSelectedActivity = (id: string) => {
    const activity = activities!.find(a => a.id === id);
    setSelectedActivity(activity);
  }

  const handleCanceledSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handledSelectedActivity(id)
    else handleCanceledSelectedActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //   setActivities(activities.map(a => a.id === activity.id ? activity : a));
    // } else {
    //   const newActivity = { ...activity, id: activity.title };
    //   setActivities([...activities, newActivity]);
    //   setSelectedActivity(newActivity);
    // }
    console.log(activity)
    setEditMode(false);
  }

  const handleDeleteActivity = (id: string) => {
    // setActivities(activities.filter(a => a.id !== id));
    // if (selectedActivity?.id === id) {
    //   setSelectedActivity(undefined);
    // }
    console.log(id)
  }

  return (
    <Box sx={{ bgcolor: '#eeee', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading activities...</Typography>
        ) : <ActivityDashboard
          activities={activities}
          selectActivity={handledSelectedActivity}
          cancelSelectActivity={handleCanceledSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDeleteActivity}
        />}
      </Container>

    </Box>
  )
}

export default App
