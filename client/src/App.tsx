import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

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
      <Typography variant='h3'>Activities</Typography>
      <List>
        {
          activities.map(activity => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default App
