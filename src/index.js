import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    fadeText: {
      background: `linear-gradient( 180deg, #FFFFFF00, 0%, #FFFFFF06 30%, #FFFFFFFF 100%)`,
      pointerEvents: 'none'
    }
  })
)

function App() {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Grid item xs={8} sm={6} md={4}>
        <Box>
          <Box
            component="div"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            fontFamily="Roboto"
            fontSize="body1.fontSize"
            fontWeight="fontWeightLight"
            textAlign="justify"
            height={['8rem']}
          >
            <Box display="flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
          </Box>
          <Box
            className={classes.fadeText}
            display="block"
            position="relative"
            top="-4rem"
            height="4rem"
          />
        </Box>
      </Grid>
    </Grid>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
