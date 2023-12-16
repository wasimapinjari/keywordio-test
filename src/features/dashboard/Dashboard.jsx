import {
  Stack,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  FormControl,
  Select,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  CardActions,
  ButtonGroup,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import { useState } from 'react';
import groupData from '../../data/groupData';
import campaignsData from '../../data/campaignsData';
import {
  addCommas,
  capitalizeFirstLetter,
  createData,
  sumColumn,
} from '../../utils/helpers';
import { PieChart } from '@mui/x-charts/PieChart';
import {
  DonutLarge,
  KeyboardArrowDown,
  KeyboardArrowUp,
  TableChartOutlined,
} from '@mui/icons-material';

function CardHeader({ children }) {
  return (
    <Stack
      sx={{
        display: 'flex',
        p: 1,
        paddingLeft: 1.8,
        paddingBottom: 0.6,
        alignItems: 'center',
      }}
      direction='row'
      spacing={0.4}
    >
      <Typography
        sx={{ flexGrow: 1, fontWeight: 'bold', color: '#444' }}
        component='p'
      >
        Ad Insights
      </Typography>
      {children}
      <IconButton size='small'>
        <HelpOutlineIcon sx={{ fill: '#DDD' }} />
      </IconButton>
    </Stack>
  );
}

function SelectMetric({ metric, onMetricChange }) {
  const [active, setActive] = useState(false)
  return (
    <FormControl sx={{ minWidth: 100, position: 'relative' }}>
      <Select
        size='small'
        displayEmpty
        defaultValue='clicks'
        value={metric}
        onChange={onMetricChange}
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          fontSize: 'small',
          '& > *': {
            fontSize: 'small',
          },
        }}
        onOpen={() => setActive(true)}
        onClose={() => setActive(false)}
      >
        <MenuItem value='clicks'>Clicks</MenuItem>
        <MenuItem value='cost'>Cost</MenuItem>
        <MenuItem value='conversions'>Conversions</MenuItem>
        <MenuItem value='revenue'>Revenue</MenuItem>
      </Select>
      <Box sx={{ position: 'absolute', right: 10, top: 7, bgcolor: "white" }}>
        {active ? <KeyboardArrowDown fontSize='1rem'/> : <KeyboardArrowUp fontSize='1rem'/>}
      </Box>
    </FormControl>
  );
}

function InsightTable({ data }) {
  const objectKeys = Object.keys(data[0]);
  return (
    <TableContainer
      variant='outlined'
      size='small'
      sx={{ border: 'none' }}
      component={Paper}
    >
      <Table
        sx={{ paddingBottom: 0, borderSpacing: '0' }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow
            sx={{
              '& > *': {
                p: '10.4px !important',
                paddingLeft: '14.4px !important',
                paddingRight: '28.8px !important',
                color: '#444 !important',
                fontWeight: 'bold !important',
              },
            }}
          >
            <TableCell>
              <Stack direction='row' alignItems='center' gap={0.2}>
                {capitalizeFirstLetter(objectKeys[0])}
                <UnfoldMoreOutlinedIcon
                  sx={{
                    fontSize: '.9rem',
                    fill: '#CCC',
                  }}
                />
              </Stack>
            </TableCell>

            {objectKeys.map(
              (key, index) =>
                index !== 0 && (
                  <TableCell align='right' sx={{ position: 'relative' }}>
                    {capitalizeFirstLetter(key)}
                    <UnfoldMoreOutlinedIcon
                      sx={{
                        position: 'absolute',
                        fontSize: '.9rem',
                        top: '.95rem',
                        right: '.8rem',
                        fill: '#CCC',
                      }}
                    />
                  </TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => {
            const objectValueArray = Object.values(row);
            return (
              <TableRow
                key={`${objectValueArray[0]}-${index}`}
                sx={{
                  '& > *': {
                    p: '10.4px !important',
                    paddingLeft: '14.4px !important',
                    paddingRight: '28.8px !important',
                    color: '#999 !important',
                  },
                  '&:last-child td, &:last-child th': {
                    border: 0,
                    paddingBottom: 0,
                  },
                }}
              >
                <TableCell component='th' scope='row'>
                  {addCommas(objectValueArray[0])}
                </TableCell>
                <TableCell align='right'>
                  {addCommas(objectValueArray[1])}
                </TableCell>
                <TableCell align='right'>
                  USD {addCommas(objectValueArray[2])}
                </TableCell>
                <TableCell align='right'>
                  {addCommas(objectValueArray[3])}
                </TableCell>
                <TableCell align='right'>
                  USD {addCommas(objectValueArray[4])}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow
            sx={{
              '& > *': {
                p: 1.2,
                paddingLeft: 1.8,
                paddingRight: 3.6,
                color: '#999 !important',
              },
              bgcolor: '#FAFAFA',
            }}
          >
            <TableCell component='th' scope='row'>
              Total
            </TableCell>
            <TableCell align='right'>
              {addCommas(sumColumn(data, 'clicks'))}
            </TableCell>
            <TableCell align='right'>
              USD {addCommas(sumColumn(data, 'cost'))}
            </TableCell>
            <TableCell align='right'>
              {addCommas(sumColumn(data, 'conversions'))}
            </TableCell>
            <TableCell align='right'>
              USD {addCommas(sumColumn(data, 'revenue'))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const size = {
  width: 1000,
  height: 300,
};

function InsightPieChart({ pieChartData, metric }) {
  const percentageSum = pieChartData.reduce((acc, current) => {
    return (
      acc + Math.floor((current.value / sumColumn(pieChartData, 'value')) * 100)
    );
  }, 0);
  let difference = 0;
  if (percentageSum !== 100) difference = 100 - percentageSum;
  return (
    <Box sx={{ position: 'relative' }}>
      <PieChart
        series={[
          {
            data: pieChartData,
            innerRadius: 75,
            outerRadius: 120,
            paddingAngle: 2,
            cornerRadius: 0,
            startAngle: 0,
            endAngle: 360,
            cx: 200,
            cy: 160,
          },
        ]}
        {...size}
      />
      <Stack sx={{ position: 'absolute', top: '35%', left: '56%' }} gap={2}>
        {pieChartData.map((data) => {
          const value = Math.floor(
            (data.value / sumColumn(pieChartData, 'value')) * 100
          );
          const offset = data.label === 'Unknown' ? difference : 0;
          return (
            <Stack direction='row' gap={2} alignItems='center'>
              <Box
                sx={{
                  bgcolor: data.color,
                  width: '54px',
                  height: '16px',
                  borderRadius: '7px',
                }}
              />
              <Box>
                <Typography>
                  {value + offset}% {data.label}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}

function Dashboard() {
  console.log(createData(groupData, 'clicks'));
  const [pieChartView, setPieChartView] = useState(true);
  const [pieChartData, setPieChartData] = useState(
    createData(groupData, 'clicks')
  );
  // const [campaignsSort, setCampaignsSort] = useState("campaigns");
  // const [groupSort, setGroupSort] = useState("group");
  // const [campaignsSortAsc, setCampaignsSortAsc] = useState(true);
  // const [groupSortAsc, setGroupSortAsc] = useState(true);
  const [metric, setMetric] = useState('clicks');
  const handleMetricChange = (event) => {
    setMetric(event.target.value);
    setPieChartData(createData(groupData, event.target.value));
  };
  return (
    <div>
      <Stack spacing={4} direction='row'>
        <Card
          variant='outlined'
          sx={{ width: '50%', '&:last-child': { p: 0 } }}
        >
          <CardContent sx={{ p: 0, paddingBottom: '0 !important' }}>
            <CardHeader />
            <Divider />
            <InsightTable data={campaignsData} />
          </CardContent>
        </Card>
        <Card
          variant='outlined'
          sx={{ width: '50%', position: 'relative', '&:last-child': { p: 0 } }}
        >
          <CardContent sx={{ p: 0, paddingBottom: '0 !important' }}>
            <CardHeader>
              {pieChartView && (
                <SelectMetric
                  metric={metric}
                  onMetricChange={handleMetricChange}
                />
              )}
            </CardHeader>
            <Divider />
            {pieChartView ? (
              <InsightPieChart pieChartData={pieChartData} metric={metric} />
            ) : (
              <InsightTable data={groupData} />
            )}
          </CardContent>
          <CardActions
            sx={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              justifyContent: 'flex-end',
            }}
          >
            <ButtonGroup
              sx={{ backgroundColor: '#00000010', borderRadius: '20px' }}
            >
              <IconButton
                sx={{
                  background: `${pieChartView ? '#0096FF' : ''}`,
                  '&:hover > *': { fill: `${pieChartView ? '#00000088' : ''}` },
                }}
                onClick={() => setPieChartView(true)}
                size='small'
              >
                <DonutLarge sx={{ fill: `${pieChartView ? 'white' : ''}` }} />
              </IconButton>
              <IconButton
                sx={{
                  background: `${!pieChartView ? '#0096FF' : ''}`,
                  '&:hover > *': {
                    fill: `${!pieChartView ? '#00000088' : ''}`,
                  },
                }}
                onClick={() => setPieChartView(false)}
                size='small'
              >
                <TableChartOutlined
                  sx={{ fill: `${!pieChartView ? 'white' : ''}` }}
                />
              </IconButton>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}

export default Dashboard;
