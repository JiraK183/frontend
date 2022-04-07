import { Table, Avatar, Container, Text } from '@mantine/core';

interface ILeaderboardsProps {
    elements: any[];    
}

function Leaderboard({ elements }: ILeaderboardsProps) {
    

    let place = 0;
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{place += 1}</td>
            <td>{<Avatar />}</td>
            <td>{element.name}</td>
            <td>{element.points}</td>
        </tr>
    ))

    return (
        <Container style={{height:500, width:600}}>
            
            <Text align='center' weight={700}>Leaderboard</Text>
            <Table verticalSpacing="xs" striped>
                <thead>
                    <tr>
                        <th>Top #</th>
                        <th colSpan={2}>User</th>
                        <th>Coins</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </Container>

    );
}

export default Leaderboard