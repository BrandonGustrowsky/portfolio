import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Grid } from '@mui/material';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Grid container spacing={3}>
        <Grid style={{border: "1px solid blue"}} item xs={5}>
          First
        </Grid>
        <Grid style={{border: "1px solid blue"}} item xs={5}>
          Second
        </Grid>
        <Grid style={{border: "1px solid blue"}} item xs={5}>
          Third
        </Grid>
        <Grid style={{border: "1px solid blue"}} item xs={5}>
          Fourth
        </Grid>
       </Grid>
    </>
  )
}

export default App
