import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import styles from '../../commonStyles/styles';
import { use, useGuardian, useRouter } from '@bluelibs/x-ui';
import { useEffect } from 'react';
import { PostCollection } from '@bundles/UIAppBundle/collections';
import {useHistory} from 'react-router-dom'
import { ObjectId } from '@bluelibs/ejson';

const HomePage = () => {
  const classes = styles();
  const guardian = useGuardian();
  const postCollection = use(PostCollection);
  const history = useHistory();
  const { user } = guardian.state;
  const [postList, setPostList] = useState([]);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const loadPosts = async () => {
      const lists = await postCollection.find(
        {},
        { _id: 1, title: 1, body: 1 }
      );
      setPostList(lists);
    };
    loadPosts();
    setFlag(false)
  }, [flag]);

const handleDelete=async(id)=>{
  const deleted=await postCollection.deleteOne(
    new ObjectId(id.toString())
  )
  if(deleted){
    setFlag(true)
  }
}

  return (
    <Grid container spacing={2}>
      {postList &&
        postList.map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card
              elevation={5}
              style={{ height: '100%' }}
              className={classes.cardContainer}
            >
              <Card
                className={classes.card}
                sx={{ minWidth: 275 }}
                style={{ height: '100%' }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.cardInner}
                >
                  <Grid item>
                    <CardContent className={classes.title}>
                      <Typography
                        component="h2"
                        align="center"
                        className={classes.titleTxt}
                        style={{ color: '#fff' }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="h2"
                        align="center"
                        style={{ color: '#fff' }}
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    style={{ marginTop: '40%' }}
                  >
                    <Grid item>
                      <Button variant="outlined" color="secondary"
                        onClick={()=>history.push(`/edit/${post._id}`)}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" onClick={()=>handleDelete(post._id)}>Delete</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default HomePage;
