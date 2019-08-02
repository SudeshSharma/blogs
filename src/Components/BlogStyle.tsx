
import { createStyles,Theme } from '@material-ui/core';
import blog3 from '../Images/blog3.jpg'

export const BlogStyle = ((theme:Theme) =>
createStyles({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    //marginTop: theme.spacing(1),
    
  
  },
  card: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    '&:hover':{
        boxShadow: '-1px 10px 29px 0px #5DADE2   ',
        transitionDuration: '0.3s',
        transition: 'all .25s linear'
      },
    borderRadius: '5px',
    
  },
   cardMedia: {
     height:"auto",
     width:"100%"
   },
   media:{
    width: 160,
   },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8),
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    // display: '-webkit-flex',
    // WebkitFlexDirection:'row',
    // flexDirection: 'row',
    // padding: theme.spacing(2),
    // marginTop: theme.spacing(5),
    
    // alignItems:'center',
  

  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontFamily:"Times New Roman, Times, serif",
    fontWeight: 'bold',
    fontSize:"150%",
    position:"-webkit-sticky",
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${blog3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
     padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    flexDirection:"column",
    alignItems:"center"
  },
  cardDetails: {
    flex: 1,
  },

  //

//   h1:{
//     color: "#2AAFE1  ",
//     position:"absolute",
//     top: '10%', left: '10%',
//     marginRight: '-80%',
//     transform: 'translate(-30%, -70%)'

// },
button:{
    backgroundColor:"#2AAFE1  ",
    fontFamily:"Times New Roman",
    color:"white"

},
header:{
  color:"#34495E" ,textDecoration:"underline",textDecorationStyle:"solid",textDecorationColor:"#EEBD09",whiteSpace:"pre-line"
},
avatar:{
  alignSelf:"center"
},
typo:{
  color:"#212F3D"
},
textInput:{
    fontFamily:"Georgia",
    color:"black",
    borderBlockColor:"#ccffff",
    '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
},
},
}));