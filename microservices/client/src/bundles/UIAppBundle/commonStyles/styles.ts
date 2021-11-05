import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme?: any) => ({
  root: {
    marginTop: '1rem',
  },
  rootCard: {
    borderRadius: 50,
  },
  media: {
    height: 150,
  },
  title: {
    paddingBottom: '0.5rem',
  },
  test: {
    border: '1px solid red',
  },
  cardContainer: {
    borderRadius: '22px !important',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    minHeight: '22rem',
    backgroundImage: `url(${'https://source.unsplash.com/random'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    '&:hover': {
      backgrouncColor: '#37A794',
      transform: 'scale(1.1)',
    },
  },
  cardInner: {
    minHeight: '100%',
    backgroundColor: 'rgba(17, 157, 150,0.9)',
    color: ' #fff',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    zIndex: 1,
    opacity: 0,
    transition: 'all 0.4s ease 0s',
    '&:hover': {
      opacity: 1,
    },
  },
  titleTxt: {
    fontWeight: 'bold',
  },
  actionSpacer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  //   create
  mainContainer: {
    minHeight: '60vh',
  },
  subContainer: {
    maxWidth: '30rem !important',
  },
  item: {
    marginBottom: '1.75rem !important',
  },
  //   Home
  appBar:{
    boxShadow:' 0px 0.7px 0px #E5E9F2',
    backgroundColor:'#37A794 !important'
  },
  toolbarMargin:{
    marginBottom:'4em'
  },
}));

export default useStyles;
