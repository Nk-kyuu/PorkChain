import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Container } from '@mui/material';

function adminDashboard() {
    // Generate Order Data
    function createData(lotID, action, location, logDateTime, eventDateTime) {
        return { lotID, action, location, logDateTime, eventDateTime };
    }

    const rows = [
        createData(
            1,
            'add',
            'farm',
            '16 Mar 2019: 10:20',
            '17 Mar 2019: 10:20',
        ),
        createData(
            2,
            'add',
            'farm',
            '20 Mar 2019: 10:20',
            '21 Mar 2019: 10:20',
        ),
        createData(
            3,
            'add',
            'farm',
            '26 Mar 2019: 10:20',
            '27 Mar 2019: 10:20',
        ),
        createData(
            4,
            'add',
            'farm',
            '30 Mar 2019: 10:20',
            '31 Mar 2019: 10:20',
        ),
    ];

    return (
        <Container>
            <h1>Transaction</h1>
            <Table size="small" border="1px">
                <TableHead>
                    <TableRow>
                        <TableCell>lotID</TableCell>
                        <TableCell>action</TableCell>
                        <TableCell>location</TableCell>
                        <TableCell>logDateTime</TableCell>
                        <TableCell>eventDateTime</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.lotID}>
                            <TableCell>{row.lotID}</TableCell>
                            <TableCell>{row.action}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.logDateTime}</TableCell>
                            <TableCell>{row.eventDateTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default adminDashboard