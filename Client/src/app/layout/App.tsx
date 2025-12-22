import { Box, Container, CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, SetActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    /* fetch('https://localhost:5001/api/activities')
      .then(response => response.json())
      .then(data => SetActivities(data)); */
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => SetActivities(response.data));

    return () => { }
  }, [])

  const handledSelectedActivity = (id: string) => {
    const activity = activities.find(a => a.id === id);
    setSelectedActivity(activity);
  }

  const handleCanceledSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <Box sx={{ bgcolor: '#eeee' }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard 
          activities={activities} 
          selectActivity={handledSelectedActivity} 
          cancelSelectActivity={handleCanceledSelectedActivity}
          selectedActivity={selectedActivity}
          />
      </Container>

    </Box>
  )
}

export default App
