import { Container, Grid, Grow, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'
import Posts from '../Posts/Posts'
import useStyles from './Styles.js'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Pagination />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  )
}

export default Home
