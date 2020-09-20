import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import {Link}  from 'react-router-dom';


const StyledHome = styled.section`


.root{
    flex-grow: 1;
    
  }
  .paper{
    padding: theme.spacing(2);
    margin: auto;
    margin-top: 100px;
    align-items: center;
    text-align: center;
    justify-content: center;
   width: 50%;
   height:  300px;
   background-color: #ff7842;
  }
`

export default function ComplexGrid() {

  return (
      <StyledHome>
    <div className='root'>
      <Paper className='paper'>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <h1> Contacts Web</h1>
              <p> This is a Contacts List Web in which you can send an OTP (via SMS)</p> 
              <p>from a list of contacts and see History of OTP Messages.
                </p>
              </Grid>
              <Grid item>
              <Button component={Link}  to="/contactList"  variant="outlined" >
              Contact List
            </Button>
              </Grid>
              <Grid item>
            <Button  component={Link}  to="/messageHistory" variant="outlined"  >
                Message History
            </Button>
            </Grid>    
          </Grid>
      </Paper>
      </div>
      </StyledHome>

  );
}
