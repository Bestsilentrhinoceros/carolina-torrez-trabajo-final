import { MenuOutlined, } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Grid, IconButton, Toolbar, Typography, Card, List, ListItem, Divider, ListItemText, ListItemAvatar, Paper, InputBase } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


export const NavBar = ({ drawerWidth = 255 }) => {

  return (
    <>
      <AppBar
        style={{ backgroundColor: '#F7F8FC', boxShadow: 'none' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuOutlined />
          </IconButton>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant="h6" noWrap component="div" sx={{
              fontSize: '24px',
              color: '#252733',
              fontFamily: ['Mulish', 'sans-serif'].join(),
              fontWeight: '700'
            }}>Overview</Typography>

            <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
              <div>
                <Paper
                variant="outlined"
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >

                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar Documento"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
              <div style={{ marginRight: '20px' }}>
                <Badge color="primary" variant="dot">
                  <NotificationsIcon fontSize="small" sx={{
                    color: '#C5C7CD'
                  }} />
                </Badge>
              </div>
              <div>
                <p style={{ color: "#252733", fontFamily: ['Mulish', 'sans-serif'].join(), fontWeight: '500', fontSize: '14px' }}>Jones Ferdinand</p>
              </div>
              <div>
                <Avatar alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              </div>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>

      <Card sx={{
        marginLeft: '280px',
        marginTop: '70px',
        marginRight: '25px'
        // ml: { sm: `${drawerWidth}px` },

      }} className='animate__animated animate__fadeInLeft' variant='outlined'>
        <List sx={{ bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Card>
    </>
  )
}
