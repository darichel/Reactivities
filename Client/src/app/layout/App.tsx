import { Container, CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, SetActivities] = useState<Activity[]>([]);

  useEffect(() => {
    /* fetch('https://localhost:5001/api/activities')
      .then(response => response.json())
      .then(data => SetActivities(data)); */
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => SetActivities(response.data));

    return () => { }
  }, [])

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities} />
      </Container>

    </>
  )
}

export default App
