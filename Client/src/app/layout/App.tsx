import { Box, Container, CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, SetActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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

  const handleOpenForm = (id?: string) => {
    if (id) handledSelectedActivity(id)
    else handleCanceledSelectedActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  } 

  return (
    <Box sx={{ bgcolor: '#eeee' }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handledSelectedActivity}
          cancelSelectActivity={handleCanceledSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose} 
        />
      </Container>

    </Box>
  )
}

export default App
