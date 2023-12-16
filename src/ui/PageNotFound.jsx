import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Stack maxHeight='100vh' alignContent='center' alignItems='center'>
      <Stack mt='25vh' alignContent='center' spacing={2}>
        <Stack spacing={-2} alignItems='center'>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h6'>Page Not found</Typography>
        </Stack>
        <ButtonGroup sx={{}}>
          <Button
            variant='outlined'
            sx={{
              '&:hover': { bgcolor: '#e1e1e1', borderColor: '#e1e1e1' },
              width: '9rem',
              fontWeight: 'bold',
              bgcolor: '#FAFAFA',
              color: '#212529',
              textTransform: 'none',
              borderColor: '#e1e1e1',
              '& > *': {
                textDecoration: 'none',
              },
            }}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button
            variant='solid'
            sx={{
              '&:hover': { bgcolor: '#0078cc' },
              width: '9rem',
              bgcolor: '#0096FF',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              '& > *': {
                textDecoration: 'none',
              },
            }}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default PageNotFound;
