import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import memories from '../../images/memories.png'
import useStyles from './Styles.js'

const Navbar = () => {
  const classes = useStyles()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    history.push('/')

    setUser(null)
  }

  // useEffect(() => {
  //   const token = user?.token

  //   // JWT here
  //   setUser(JSON.parse(localStorage.getItem('profile')))
  // }, [])
  return (
    <div>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to='/'
            className={classes.heading}
            variant='h2'
            align='center'
          >
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='memories'
            height='60'
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>
                {user.result.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to='/auth'
              variant='contained'
              color='primary'
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
