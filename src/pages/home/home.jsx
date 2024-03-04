import './home.css';
import QRCodeReader from '../../components/qrcodeReader';
import { Container } from '@mui/material';

const home = () => {
    return (
        <Container>
            <div className="box">
            <h1>This is home page</h1>
        </div>
        <QRCodeReader/>
        </Container>
        
        
    );
}

export default home