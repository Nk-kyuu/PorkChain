import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Button } from '@mui/material';

function adminAddUser() {
    // Generate Order Data
    function createData(userID, role, address, username, firstname, lastname, email, phone) {
        return { userID, role, address, username, firstname, lastname, email, phone };
    }

    const rows = [
        createData(
            1,
            'farmer',
            'x006555848',
            'john5555',
            'john',
            'carter',
            'john12@gmail.com',
            '0950473789'
        ),
        createData(
            2,
            'slaughter',
            'x0065557758',
            'lin5555',
            'lin',
            'lili',
            'lili69@gmail.com',
            '0955553789'
        ),
        createData(
            3,
            'retailer',
            'x005558748',
            'percent5555',
            'percent',
            'chonti',
            'chonti888@gmail.com',
            '0955883789'
        ),
        createData(
            4,
            'farmer',
            'x006755848',
            'khing785',
            'khing',
            'khengkheng',
            'kheng875@gmail.com',
            '0950473789'
        ),
    ];

    return (
        <Container>
            <h1>User</h1>
            <div style={{position: 'absolute',top:'50px', right: '200px'}}>
                <Button variant='contained' href='/home'>Add User</Button>
            </div>
            <Table size="small" border="1px">
                <TableHead>
                    <TableRow>
                        <TableCell>UserID</TableCell>
                        <TableCell>role</TableCell>
                        <TableCell>address</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>firstname</TableCell>
                        <TableCell>lastname</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.lotID}>
                            <TableCell>{row.userID}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default adminAddUser