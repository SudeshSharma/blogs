import React from 'react'
import {Grid, Toolbar, Link, withStyles} from '@material-ui/core'
import { BlogStyle } from './BlogStyle';

const sections = [
    'TALLY',
    'GST',
    'VAT',
    'TAX',
    'BUDGET',
  ];

 class BlogBar extends React.Component{

   
    render(){
        const {classes}:any =this.props
        return(
            <div>
                <Grid container xs={12}>
          <Toolbar component="nav" variant="dense" className={classes. sidebarSection}>
          {sections.map(section => (
         
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}>
              {section}
            </Link>
          
          ))}
      </Toolbar>    
      </Grid>

            </div>
        )
    }
}

export default withStyles(BlogStyle)(BlogBar)


