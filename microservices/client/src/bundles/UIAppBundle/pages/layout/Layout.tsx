import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import styles from '../../commonStyles/styles';
import { useRouter } from '@bluelibs/x-ui';
import { CREATE_POST } from '../Posts/routes';
import {Link} from 'react-router-dom'

const Layout = ({ children }) => {
  const classes = styles();

  return (
    <>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar disableGutters style={{ minHeight: 52.5 }}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                color="inherit"
                style={{ textTransform: 'none', fontSize: 15 }}
                component={Link}
                to="/create"
              >
                Create Post
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      {children}
    </>
  );
};

export default Layout;
