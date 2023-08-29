import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight:'100vh', backgroundColor: 'primary.main', padding:'4' }}
    >
      <Grid item
        className='box-shadow'
        sx={{ backgroundColor: 'white', padding:3, borderRadius:2 }}
      >
        <Typography variant='h5' sx={{mb:1}}>Login</Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField
                label='Email'
                type='email'
                placeholder="correro@gmail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop: 2}}>
              <TextField
                label='Password'
                type='password'
                placeholder="password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} to='/auth/register'>
                Create Account
              </Link>
            </Grid>

          </Grid>
        </form>

      </Grid>

    </Grid>
  )
}