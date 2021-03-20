import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  buttonArea: {
    textAlign: 'right',
    padding: 10,
  },
  cardFooter: {
    background: 'lightGray',
  },
  readLabel: {
    textAlign: 'left',
    marginLeft: 10,
    color: 'gray',
  },
  unreadLabel: {
    textAlign: 'left',
    marginLeft: 10,
    color: 'green',
  },
})

const PostCard = (props) => {
  const { history, localToken } = useContext(AppContext)
  const { post } = props
  const classes = useStyles()

  const handleClickDetail = () => {
    axios
      .post(`/api/post/${post.id}/read?api_token=${localToken}`)
      .then((res) => {
        console.log('res: ', res)
      })
    history.push(`/post/${post.id}`)
  }

  return (
    <>
      <Card className={classes.root}>
        {post.read ? (
          <p className={classes.readLabel}>既読</p>
        ) : (
          <p className={classes.unreadLabel}>未読</p>
        )}
        <CardContent>
          <Typography variant="body2" component="p">
            タイトル：{post.title}
          </Typography>
          <Typography variant="body2" component="p">
            内容：{post.content}
          </Typography>
        </CardContent>
        <div className={classes.buttonArea}>
          <Button onClick={handleClickDetail} size="small" variant="outlined">
            詳細
          </Button>
        </div>
        <Typography
          className={classes.cardFooter}
          variant="body2"
          component="div"
        >
          投稿日時：{post.created_at}
        </Typography>
      </Card>
    </>
  )
}

export default PostCard
