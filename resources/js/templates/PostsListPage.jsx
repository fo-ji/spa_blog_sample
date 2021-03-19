import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import PostCard from '../components/PostCard'
import PostDialog from '../components/PostDialog'
import axios from 'axios'

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
  const { localToken } = useContext(AppContext)
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    axios.get(`/api/posts?api_token=${localToken}`).then((res) => {
      setPosts(res && res.data ? res.data : [])
    })
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <div className={classes.container}>
      <div className={classes.topButton}>
        <Button variant="contained" onClick={handleClickOpen}>
          新規投稿
        </Button>
        <PostDialog open={open} setOpen={setOpen} />
      </div>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          投稿一覧
        </Typography>
      </AppBar>
      {posts.length > 0 &&
        posts.map((post, idx) => <PostCard key={idx} post={post} />)}
    </div>
  )
}

export default PostsListPage
