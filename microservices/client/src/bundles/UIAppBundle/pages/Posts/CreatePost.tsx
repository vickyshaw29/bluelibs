import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PostCollection } from '@bundles/UIAppBundle/collections';
import { use } from '@bluelibs/x-ui';
import {useHistory} from 'react-router-dom'
import styles from '../../commonStyles/styles'

const CreatePost = () => {
  const classes = styles();
  const history=useHistory()
  const postCollection = use(PostCollection);
  const [post, setpost] = useState({
    title: '',
    body: '',
  });
  const [titleHelper, setTitleHelper] = useState('');
  const [bodyHelper, setBodyHelper] = useState('');

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case 'title':
        setpost({ ...post, title: e.target.value });
        valid = e.target.value.length !== 0;
        if (!valid) {
          setTitleHelper('Please provide a valid title');
        } else {
          setTitleHelper('');
        }
        break;
      case 'body':
        setpost({ ...post, body: e.target.value });
        valid = e.target.value.length !== 0;
        if (!valid) {
          setBodyHelper('Please provide a valid body');
        } else {
          setBodyHelper('');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    postCollection.insertOne(post)
    setpost({
        title:"",
        body:""
    })
    
    history.push("/")
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <Grid
        item
        container
        direction="column"
        xs
        className={classes.subContainer}
      >
        <Grid item container justifyContent="center" className={classes.item}>
          <Typography variant="h6">Create a Post</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            variant="outlined"
            size="small"
            id="title"
            label="Title"
            fullWidth
            value={post.title}
            onChange={onChange}
            error={titleHelper.length !== 0}
            helperText={titleHelper}
          />
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            variant="outlined"
            size="small"
            id="body"
            label="Body"
            fullWidth
            value={post.body}
            onChange={onChange}
            error={bodyHelper.length !== 0}
            helperText={bodyHelper}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Button
            variant="contained"
            disabled={
              post.title.length === 0 ||
              post.body.length === 0 ||
              titleHelper.length !== 0 ||
              bodyHelper.length !== 0
            }
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
