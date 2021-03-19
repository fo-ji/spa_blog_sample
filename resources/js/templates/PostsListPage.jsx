import React, { useState } from 'react'
import PostCard from '../components/PostCard'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  topButton: {
    textAlign: 'right',
    marginBottom: 10,
  },
  container: {
    width: 500,
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  },
}))

const PostsListPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.topButton}>
        <Button variant="contained">新規投稿</Button>
      </div>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          投稿一覧
        </Typography>
      </AppBar>
      <PostCard />
    </div>
  )
}

export default PostsListPage
