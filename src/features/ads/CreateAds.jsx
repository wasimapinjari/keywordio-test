import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

function CompactCard({ type, img, selected, onSelected }) {
  return (
    <Card
      variant='elevation'
      sx={{
        boxShadow: '.2rem .2rem .8rem .2rem #00000011',
      }}
      onClick={() => onSelected(type)}
    >
      <CardContent sx={{ height: '300px', width: '300px' }}>
        <Checkbox
          checked={selected.includes(type)}
          onChange={() => onSelected(type)}
          inputProps={{ 'aria-label': 'Text Ad' }}
          sx={{
            '&.Mui-checked': {
              color: '#0096FF',
            },
          }}
        />
        <CardMedia
          component='img'
          height='100%'
          width='100%'
          image={img}
          alt='Text Ad'
          sx={{
            transform: 'translateY(-1.3rem) scale(.96)',
            objectFit: 'contain',
          }}
        />
      </CardContent>
      <CardContent
        sx={{
          bgcolor: '#FAFAFA',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='caption' sx={{ color: '#999' }}>
          Create
        </Typography>
        <Typography sx={{ fontWeight: 'bold', mt: '-.3rem' }}>
          {type} Ad
        </Typography>
      </CardContent>
    </Card>
  );
}

function CreateAds() {
  const [selected, setSelected] = useState(['Text', 'Media']);
  const navigate = useNavigate();
  function handleSelected(adType) {
    const index = selected.indexOf(adType);
    if (index === -1) return setSelected([...selected, adType]);
    return setSelected(selected.filter((ad) => ad !== adType));
  }
  const route =
    selected.length === 1
      ? selected[0].toLowerCase() + '-ad'
      : selected.length === 0
      ? '/create'
      : '/create/media-ad';
  return (
    <div>
      <Card variant='outlined'>
        <CardContent sx={{ pb: 0 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Create Ads</Typography>
        </CardContent>
        <CardContent  sx={{ py: 0.4, height: '510px', overflowY: 'auto'}}>
          <Stack mt={8} direction='row' justifyContent='center' spacing={6}>
            <CompactCard
              type='Text'
              img='phone1.png'
              selected={selected}
              onSelected={handleSelected}
            />
            <CompactCard
              type='Media'
              img='phone2.png'
              selected={selected}
              onSelected={handleSelected}
            />
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 2, justifyContent: 'flex-end' }}>
          <Button
            variant='solid'
            sx={{
              '&:hover': { bgcolor: '#0078cc' },
              width: '9rem',
              bgcolor: '#0096FF',
              color: 'white',
              '& > *': {
                textDecoration: 'none',
                fontWeight: 'bold',
                textTransform: 'none',
                color: 'white',
              },
            }}
            onClick={() => navigate(route)}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CreateAds;
