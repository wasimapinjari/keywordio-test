import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitModal } from './CreateTextAd';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

function Input({ label, placeholder }) {
  return (
    <>
      <FormLabel sx={{ pb: 0.6 }}>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {label}
        </Typography>
      </FormLabel>
      <OutlinedInput size='small' placeholder={placeholder} />
    </>
  );
}

function CreateMediaAd() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  function handleSubmit() {
    setOpen(true);
    setTimeout(() => navigate('/create'), 600);
  }
  return (
    <Card variant='outlined' sx={{ position: 'relative'}}>
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontWeight: 'bold' }}>Create Text & Media</Typography>
      </CardContent>
      <CardContent sx={{ py: 0.4, height: '510px', overflowY: 'auto' }}>
        <form noValidate autoComplete='off'>
          <Box
            display='grid'
            gap={2}
            columnGap={3}
            mt={2}
            gridTemplateColumns={'repeat(6, 1fr)'}
          >
            <FormControl sx={{ gridColumn: '1 / 3 span' }}>
              <Input
                label='Heading 01'
                placeholder='Add a heading that will make user interested'
              />
            </FormControl>
            <FormControl
              sx={{ gridColumn: '4 / 3 span', gridRow: '1 / span 2' }}
            >
              <FormLabel sx={{ pb: 1, fontWeight: 'bold' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                  Description 01
                </Typography>
              </FormLabel>
              <OutlinedInput
                size='small'
                multiline
                rows={5}
                placeholder='Add a heading that will make user interested'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '1 / 3 span' }}>
              <Input
                label='Heading 02'
                placeholder='Add a heading that will make user interested'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '1 / 2 span' }}>
              <Input
                label='Landscape Marketing Image (1:9:1)'
                placeholder='Add the URL of the image you want to use for the ad'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '3 / 2 span' }}>
              <Input
                label='Potrait Marketing Image (4:5)'
                placeholder='Add the URL of the image you want to use for the ad'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '5 / 2 span' }}>
              <Input
                label='Square Marketing Image (1:1)'
                placeholder='Add the URL of the image you want to use for the ad'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '1 / -1' }}>
              <Input
                label='Video URL'
                placeholder='Add the URL of the video you want to use for the ad'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '1 / 3 span' }}>
              <Input
                label='Business Name'
                placeholder='Add your business name'
              />
            </FormControl>
            <FormControl
              sx={{ gridColumn: '4 / 3 span', position: 'relative' }}
            >
              <FormLabel sx={{ pb: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                  Button Label
                </Typography>
              </FormLabel>
              <Select
                size='small'
                defaultValue="none"
                // value={metric}
                // onChange={onMetricChange}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  height: '100%',
                  color: "#999",
                  mt: -.4
                }}
                onOpen={() => setActive(true)}
                onClose={() => setActive(false)}
              >
                <MenuItem value='none' sx={{color:"#999"}}>
                  Select a label that best suits your ad
                </MenuItem>
                <MenuItem value='clicks'>Shop Now</MenuItem>
                <MenuItem value='cost'>Try Free</MenuItem>
                <MenuItem value='conversions'>See Offers</MenuItem>
                <MenuItem value='revenue'>Learn More</MenuItem>
              </Select>
              <Box
                sx={{
                  position: 'absolute',
                  height: 0.2,
                  right: 6,
                  top: 38,
                  bgcolor: 'white',
                }}
              >
                {active ? (
                  <KeyboardArrowUp fontSize='1rem' />
                ) : (
                  <KeyboardArrowDown fontSize='1rem' />
                )}
              </Box>
            </FormControl>
            <FormControl sx={{ gridColumn: '1 / -1' }}>
              <Input
                label='Website URL'
                placeholder='Add the URL of the landing page you want to redirect users to'
              />
            </FormControl>
          </Box>
        </form>
      </CardContent>
      <CardActions sx={{ p: 2, pr: 1, justifyContent: 'flex-end', gap: 1 }}>
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
          onClick={() => navigate(-1)}
        >
          Back
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {open && <SubmitModal />}
      </CardActions>
    </Card>
  );
}

export default CreateMediaAd;
