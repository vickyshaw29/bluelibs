import React, { useEffect, useState } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { use } from '@bluelibs/x-ui';
import { PostCollection } from '@bundles/UIAppBundle/collections';
import { ObjectId } from '@bluelibs/ejson';
import styles from '../../../commonStyles/styles';
import {useHistory} from 'react-router-dom'

interface Post {
  _id: string;
  title: string;
  body: string;
}

const EditPost = (props) => {
  const { id } = props;
  const classes = styles();
  const history=useHistory()
  const postCollection = use(PostCollection);

  const [titleHelper, setTitleHelper] = useState('');
  const [bodyHelper, setBodyHelper] = useState('');
  const [post, setPost] = useState<Post>({
    _id:'',
    title: '',
    body: '',
  });

  const findpost = async () => {
    const post = await postCollection.findOneById(new ObjectId(id.toString()), {
      _id: 1,
      title: 1,
      body: 1,
    });
    setPost({
      _id:"",
      title: post.title,
      body: post.body,
    });
  };
  useEffect(() => {
    findpost();
  }, []);

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case 'title':
        setPost({ ...post, title: e.target.value });
        valid = e.target.value.length !== 0;
        if (!valid) {
          setTitleHelper('Please provide a valid title');
        } else {
          setTitleHelper('');
        }
        break;
      case 'body':
        setPost({ ...post, body: e.target.value });
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

  const handleSubmit = async() => {
  const updated=await  postCollection.updateOne(
      new ObjectId(id.toString()) ,
      {
        title:post.title,
        body:post.body
      }
    );
    if(updated){
      history.push("/")
    }
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
            multiline
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

export default EditPost;
