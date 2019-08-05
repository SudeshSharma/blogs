import React from 'react';

import {Button,Card,CardContent,CardMedia,CssBaseline,Grid,Typography,Container, TextField, CardHeader,withStyles, Avatar, Paper, CardActions, Toolbar, Link } from '@material-ui/core';
// import classNames from 'classnames'

import GST1 from '../Images/GST1.jpg'
import regi from '../Images/regi.png'
import blog3 from '../Images/blog3.jpg'
import './style.css'
import { BlogStyle } from './BlogStyle';
const img1 = require('../Images/guru.jpg')
const img2 = require('../Images/Steve.jpg')

const sections = [
  'ALL',
  'GST',
  'TALLY',
  'TAX',
  'BUDGET',
];


class Blog extends React.Component {
  render(){
  const {classes}:any = this.props
  return (
    <React.Fragment>
      <CssBaseline />   
      <Paper className={classes.mainFeaturedPost}>
            {
              <img
                style={{ display: 'none' }}
                src={blog3}
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Tally And GST Live Blog
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Daily Updates From The Viser Training Centre.
                  </Typography>          
                </div>
              </Grid>
            </Grid>
      </Paper>

      
      <Container  maxWidth="md">  
    
    
     
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
         
            <Link
              color="inherit"
              noWrap
              underline="none"
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}>
              {section}
            </Link>
          
          ))}
      </Toolbar>    
      <div >
      <main>
          {/* Tally Toolbar for filter blogs */}
       
         
          {/* blogs start*/}
         {/* <Slide direction='up'> */}
          <Grid container xs={12} spacing={5} className={classes.cardGrid} >
        
          {/* first blog */}
              <Grid item  xs={12} sm={6} >
                <Card raised className={classes.card}>
                    <CardMedia 
                    className={classes.cardMedia}
                    component="img" image={GST1} title="GST" />
                    <CardHeader title="GST" className={classes.header} />                
                    <CardContent className={classes.cardContent}>
                    <Typography variant="body1" className={classes.typo}>
                    Government uses GST alerts 
                    </Typography>
                    </CardContent>
                    <CardActions>
                             <Button size="small" color="primary" style={{marginLeft:"40%",alignSelf:"center"}} href="https://timesofindia.indiatimes.com/business/india-business/govt-uses-gst-alerts-for-better-compliance/articleshow/69997338.cms" className={classes.button}>Read More</Button>
                    </CardActions>
                    <CardHeader avatar={
                    <Avatar alt="author" src={img1} />} className={classes.avatar} title="Bill Gates" subheader="18 July 2019" />
                    
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} >
                <Card raised className={classes.card}>
                  <CardMedia className={classes.cardMedia} component="img"  image={GST1}/>
                  <CardHeader title="GST" className={classes.header}/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1" className={classes.typo}>
                    GST reforms Agenda
                    </Typography>
                  </CardContent>
                  <CardActions>
                             <Button size="small" color="primary" style={{marginLeft:"40%",alignSelf:"center"}} href="https://www.thehindubusinessline.com/opinion/gst-reforms-agenda/article28158215.ece" className={classes.button}>Read More</Button>
                  </CardActions>
                  <CardHeader avatar={
                  <Avatar alt="author" src={img2} />} className={classes.avatar} title="Steve Jobs" subheader="18 July 2019" />  
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} >
                <Card raised className={classes.card}>
                  <CardMedia className={classes.cardMedia} component="img" alt="Tally ERP 9" height="auto"  image={regi} title="Tally ERP 9"/>
                  <CardHeader title="GST" className={classes.header}/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1" className={classes.typo}>
                    ERP 9 For BlackBerry 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" style={{marginLeft:"40%",alignSelf:"center"}} href="https://www.firstpost.com/business/biztech/erp-9-for-blackberry-now-available-for-tally-erp-9-users-1895031.html" className={classes.button}>Read More</Button>
                  </CardActions>
                  <CardHeader avatar={<Avatar alt="author" src={img1} />} className={classes.avatar} title="Bill Gates" subheader="18 July 2019" />
                </Card>
              </Grid>
         {/* Side menu
              
               <Grid item xs={12} md={4}>
               <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                Tally's main product is its enterprise resource planning and accounting software called Tally.ERP 9. For large organisations with many branches, Tally.Server 9 is offered. The software handles accounting, inventory management, tax management, payroll etc
                </Typography>
              </Paper> 
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Posts By Month
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
              {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                  {network}
                </Link>
              ))}
              </Grid>  */}
         
            </Grid>
            {/* </Slide> */}
            </main>
            </div>
        </Container>  
      
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Join The Viser Newsletter!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Subscribe to our email news letters for valueble tally and gst resource,
                     Sent out you on every saturday.
        </Typography>
        <form>
                    <TextField type="text" label="Email" variant="outlined" inputProps={{className:classes.textInput}} className={classes.textInput}/>
                    <Button type="submit" className={classes.button} variant="contained" style={{marginLeft:"4%"}}>Subscribe</Button>
                  <br/><br/><br/>
                 </form>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
}
export default withStyles(BlogStyle)(Blog)
















