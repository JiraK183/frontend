import { Table, Avatar, Container, Text } from '@mantine/core';

interface ILeaderboardsProps {
    elements: any[];
}

function Leaderboard({ elements }: ILeaderboardsProps) {

    let place = 0;
    const rows = elements.map((element) => (
        <tr key={element}>
            <td>{place += 1}</td>
            <td>{<Avatar />}</td>
            <td>{element.user}</td>
            <td>{element.coins}</td>
        </tr>
    ))

    return (
        <Container>
            
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