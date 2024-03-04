import { Container } from '@mui/material';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Webcam from 'react-webcam';


const QRCodeReader = () => {
    const [result, setResult] = useState('');

    // Function to handle QR code scan
    const handleScan = (data) => {
        if (data) {
            setResult(data);
        }
    };

    // Function to handle error during QR code scan
    const handleError = (err) => {
        console.error(err);
    };
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (!file) return;

    //     const reader = new FileReader();
    //     reader.onload = async () => {
    //         const qr = new QrReader();
    //         qr.callback = (error, result) => {
    //             if (error) {
    //                 console.error(error);
    //                 setResult('Error decoding QR code');
    //             } else {
    //                 setResult(result?.result || 'No QR code found');
    //             }
    //         };
    //         qr.decode(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };

    return (
        
        <Container><div>
            <h1>QR Code Reader</h1>
            {/* Use Webcam component to access user's camera */}
            <Webcam
                style={{ width: '100%', height: 'auto' }}
                screenshotFormat="image/jpeg"
            />
            {/* Use QrReader component to read QR codes */}
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            {/* Display scanned result */}
            <p>{result}</p>

        </div>
            {/* <div>
                <h1>QR Code Reader from File</h1>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <p>{result}</p>
            </div> */}
        </Container>

    );
};

export default QRCodeReader;
