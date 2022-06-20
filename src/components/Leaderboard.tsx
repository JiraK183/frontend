import { Table, Avatar, Container, Text, MantineProvider, SimpleGrid, Card, Image, Badge, Button, Group, useMantineTheme, ThemeIcon } from '@mantine/core';
import { Medal, Medal2 } from 'tabler-icons-react';
import { MoonLoader } from 'react-spinners';
interface ILeaderboardsProps {
    elements: any[];
}

function Leaderboard({ elements }: ILeaderboardsProps) {


    let place = 0;
    const rows = elements.map((element) => (
        <tr key={element.name}>
            {place > 2 && place % 2 == 0 ?
                <td><ThemeIcon size={40} variant="gradient" gradient={{ from: 'dark', to: 'dark', deg: 35 }} >{place += 1}<Medal size={20} color="#8b0000" /></ThemeIcon></td>
                : place > 2 && place % 2 == 1 ?
                    <td><ThemeIcon size={40} color="dark" >{place += 1}<Medal size={20} color="#8b0000" /></ThemeIcon></td>
                    : place == 2 ?
                        <td><ThemeIcon size={40} variant="gradient" gradient={{ from: 'dark', to: 'dark', deg: 35 }} >{place += 1}<Medal size={20} color="#CD7F32" /></ThemeIcon></td>
                        : place == 1 ?
                            <td><ThemeIcon size={40} color="dark" >{place += 1}<Medal size={20} color="silver" /></ThemeIcon></td>
                            :
                            <td><ThemeIcon size={40} variant="gradient" gradient={{ from: 'dark', to: 'dark', deg: 35 }} >{place += 1}<Medal size={20} color="gold" /></ThemeIcon></td>
            }
            <td>{<Avatar />}</td>
            <td>{element.name}</td>
            <td>{element.points}</td>
        </tr>


    ))
    return (
        <Container style={{ height: 500, width: 300 }}>

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
                    {elements && elements.length > 0 ?
                        rows
                        : <th colSpan={4}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
                                    <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
                                </div>
                            </div>
                        </th>
                    }
                </tbody>
            </Table>
        </Container>

    );
}

export default Leaderboard