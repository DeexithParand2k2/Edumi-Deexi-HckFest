import React from 'react'
import { Grid, Box } from '@chakra-ui/react'
import Sidebar from '../Sidebar'

const AdminCourses=() =>{
  return (
    <Grid css={{
        cusrsor:`url(), default` // need to be updated
    }}
    minH={"100vh"} templateColumns={['1fr', '5fr 1fr']}>

        <Box>

        </Box>
        <Sidebar />
    </Grid>
  )
}

export default AdminCourses
