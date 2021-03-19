import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../AppContext'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    textAlign: 'center',
  },
  textField: {
    width: 500,
  },
}))

const PostDialog = (props) => {
  const { open, setOpen } = props
  const { history, localToken } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [post, setPost] = useState({})
  const methods = useForm()
  const { handleSubmit, register } = methods

  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  const inputTitle = (e) => {
    setTitle(e.target.value)
  }

  const inputContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = (record) => {
    axios
      .post(`/api/post/create?api_token=${localToken}`, record)
      .then((res) => {
        setPost(res && res.data ? res.data : {})
        setTitle('')
        setContent('')
        // [TODO]詳細ページへリンク
      })
  }

  console.log('post: ', post)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>新規投稿</DialogTitle>
      <DialogContent className={classes.container}>
        <form>
          <TextField
            autoFocus
            className={classes.textField}
            inputRef={register}
            label="タイトル"
            name="title"
            onChange={inputTitle}
            required
            value={title}
          />
          <TextField
            className={classes.textField}
            inputRef={register}
            label="投稿内容"
            multiline
            name="content"
            onChange={inputContent}
            required
            rows={4}
            style={{ marginTop: 15 }}
            value={content}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit(onSubmit)} color="primary">
          投稿
        </Button>
        <Button onClick={handleClose} color="primary">
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PostDialog
