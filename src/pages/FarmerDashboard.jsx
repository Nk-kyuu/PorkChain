

function FarmerDashboard() {
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

        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>

                <div style={{ flex: 1 }}>
                    <table>
                        <thead>
                            <tr>
                                <th>lotid</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.lotID}>
                                    <td>{row.lotID}</td>
                                    <td>{row.name}</td> {/* Assuming there's a 'name' property */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FarmerDashboard