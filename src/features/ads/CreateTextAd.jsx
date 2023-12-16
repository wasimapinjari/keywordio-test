import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Input({ label, placeholder }) {
  return (
    <>
      <FormLabel sx={{ pb: 1 }}>
        <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
          {label}
        </Typography>
      </FormLabel>
      <OutlinedInput size='small' placeholder={placeholder} />
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: '.2rem .2rem .8rem .2rem #00000022',
  p: 6,
};

export function SubmitModal({ open, setOpen }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box sx={style}>
            <Stack alignItems='center' gap={1}>
              <CheckCircleIcon fontSize='large' sx={{ color: '#0096FF' }} />
              <Typography
                id='modal-modal-title'
                sx={{ fontWeight: 'bold' }}
                variant='subtitle1'
                component='h2'
              >
                Submitted
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

function CreateMediaAd() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(['Text', 'Media']);
  const navigate = useNavigate();
  function handleSelected(adType) {
    const index = selected.indexOf(adType);
    if (index === -1) return setSelected([...selected, adType]);
    return setSelected(selected.filter((ad) => ad !== adType));
  }
  function handleSubmit() {
    setOpen(true);
    setTimeout(() => navigate('/create'), 600);
  }
  return (
    <Card variant='outlined'>
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
            <FormControl sx={{ gridColumn: '1 / 3 span' }}>
              <Input
                label='Business Name'
                placeholder='Add your business name'
              />
            </FormControl>
            <FormControl sx={{ gridColumn: '4 / 3 span' }}>
              <Input
                label='Button Label'
                placeholder='Select a label that best suits your ad'
              />
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
      <CardActions sx={{ p: 2, justifyContent: 'flex-end', gap: 1 }}>
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
        <SubmitModal open={open} setOpen={setOpen} />
      </CardActions>
    </Card>
  );
}

export default CreateMediaAd;
