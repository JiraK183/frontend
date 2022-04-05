import { Table } from '@mantine/core';

interface ILeaderboardsProps {
    elements: any[];
}

function Leaderboard({ elements }: ILeaderboardsProps) {

    let place = 0;
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{place + 1}</td>
            <td>{element.name}</td>
            <td>{element.coins}</td>
        </tr>
    ))

    return (
        <Table verticalSpacing="xs" striped>
            <thead>
                <tr>
                    <th>Top #</th>
                    <th>Name</th>
                    <th>Coins</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

export default Leaderboard