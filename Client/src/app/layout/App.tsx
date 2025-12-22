import { Container, CssBaseline, List, ListItem, ListItemText } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';

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
      <Container maxWidth="xl" sx={{ mt: 3  }}>
        <List>
        {
          activities.map(activity => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))
        }
      </List>
      </Container>
      
    </>
  )
}

export default App
