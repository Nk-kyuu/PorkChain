import './consumerDetail.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

 
const consumerDetail = () => {
    const data = [
        { category: 'LotID', value: 'P0000001' },
        { category: 'Origin', startDate: 'Origin Start Date', endDate: 'Origin End Date', value: 'Origin Value' },
        { category: 'Location (Farm)', startDate: 'Farm Start Date', endDate: 'Farm End Date', value: 'Farm Value' },
        { category: 'Location (Slaughterhouse)', startDate: 'Slaughterhouse Start Date', endDate: 'Slaughterhouse End Date', value: 'Slaughterhouse Value' },
        { category: 'Location (Retailer)', startDate: 'Retailer Start Date', endDate: 'Retailer End Date', value: 'Retailer Value' },
      ];
    return (
        
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.category}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default consumerDetail;