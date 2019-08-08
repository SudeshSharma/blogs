import React from 'react';
import {Button,Card,CardContent,CardMedia,CssBaseline,Grid,Typography,Container,  CardHeader,withStyles, Avatar, Paper, CardActions, Toolbar, Link } from '@material-ui/core';
import GST1 from '../Images/GST1.jpg'
import GST3 from '../Images/GST3.jpg'
import viser from '../Images/viser.jpeg'
import { BlogStyle } from './BlogStyle';
const img1 = require('../Images/bl1.jpeg')
const img2 = require('../Images/bl2.jpeg')
const img3 =  require('../Images/bl3.jpeg')
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
                src={viser}
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom >
                    Blog
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
                    <Avatar alt="author" src={img1} />} className={classes.avatar} title="Nitin Gupta" subheader="18 July 2019" />
                    
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
                  <Avatar alt="author" src={img2} />} className={classes.avatar} title="Madhuri Adasol" subheader="18 July 2019" />  
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} >
                <Card raised className={classes.card}>
                  <CardMedia className={classes.cardMedia} component="img" alt="Tally ERP 9" height="auto"  image={GST3} title="Tally ERP 9"/>
                  <CardHeader title="GST" className={classes.header}/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1" className={classes.typo}>
                    GST on Cinema Tickets
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" style={{marginLeft:"40%",alignSelf:"center"}} href="https://www.business-standard.com/article/news-ians/mamata-government-to-give-rebates-on-cinema-tickets-in-gst-regime-117062801420_1.html" className={classes.button}>Read More</Button>
                  </CardActions>
                  <CardHeader avatar={<Avatar alt="author" src={img3} />} className={classes.avatar} title="Sudesh Sharma" subheader="18 July 2019" />
                </Card>
              </Grid>
         
            </Grid>
         
            </main>
            </div>
        </Container>  
      
      {/* Footer */}
      {/* <footer className={classes.footer}>
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
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}
}
export default withStyles(BlogStyle)(Blog)
















