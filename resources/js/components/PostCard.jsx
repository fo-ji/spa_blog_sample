import React from 'react'
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
})

const PostCard = () => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" component="p">
            タイトル：
          </Typography>
          <Typography variant="body2" component="p">
            内容：
          </Typography>
        </CardContent>
        <div className={classes.buttonArea}>
          <Button size="small" variant="outlined">
            詳細
          </Button>
        </div>
        <Typography
          className={classes.cardFooter}
          variant="body2"
          component="div"
        >
          投稿日時：
        </Typography>
      </Card>
    </>
  )
}

export default PostCard
