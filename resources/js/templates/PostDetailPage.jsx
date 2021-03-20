import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../AppContext'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: 500,
    textAlign: 'center',
  },
  buttonArea: {
    marginTop: 20,
    width: 500,
    textAlign: 'right',
  },
})

const PostDetailPage = () => {
  const { history, localToken, user } = useContext(AppContext)
  const { resourceId } = useParams()
  const [post, setPost] = useState({})
  const [logs, setLogs] = useState([])

  const classes = useStyles()

  useEffect(() => {
    axios.get(`/api/post/${resourceId}?api_token=${localToken}`).then((res) => {
      setPost(res && res.data ? res.data : [])
    })
    if (user.role === 1) {
      axios
        .get(`/api/post/${resourceId}/logs?api_token=${localToken}`)
        .then((res) => {
          setLogs(res && res.data ? res.data : [])
        })
    }
  }, [])

  console.log('logs: ', logs)

  return (
    <div className={classes.wrapper}>
      <Card className={classes.container} variant="outlined">
        <AppBar position="static">
          <Typography variant="h6">投稿詳細</Typography>
        </AppBar>
        <CardContent>
          <Typography variant="body2" component="p">
            タイトル：{post.title}
          </Typography>
          <Typography variant="body2" component="p">
            内容：{post.content}
          </Typography>
        </CardContent>
        <Typography variant="body2" component="div">
          投稿日時：{post.created_at}
        </Typography>
      </Card>
      {user.role === 1 && (
        <Card className={classes.container} variant="outlined">
          <AppBar position="static">
            <Typography variant="h6">閲覧履歴</Typography>
          </AppBar>
          <Typography variant="body2" component="p">
            閲覧者数：{logs.length}
          </Typography>
          {logs.length > 0 &&
            logs.map((log, idx) => (
              <CardContent key={idx}>
                <Typography variant="body2" component="p">
                  閲覧者：{log.user_name}
                </Typography>
                <Typography variant="body2" component="div">
                  閲覧日時：{log.created_at}
                </Typography>
              </CardContent>
            ))}
        </Card>
      )}
      <div className={classes.buttonArea}>
        <Button variant="contained" onClick={() => history.goBack()}>
          一覧へ戻る
        </Button>
      </div>
    </div>
  )
}

export default PostDetailPage
