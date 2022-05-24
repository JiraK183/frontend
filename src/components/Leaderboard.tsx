import { Table, Avatar, Container, Text, MantineProvider, SimpleGrid, Card, Image, Badge, Button, Group, useMantineTheme, ThemeIcon } from '@mantine/core';
import { Medal, Medal2} from 'tabler-icons-react';
interface ILeaderboardsProps {
    elements: any[];      
}

function Leaderboard({ elements }: ILeaderboardsProps) {
    

    let place = 0;
    const rows = elements.map((element) => (       
        <tr key={element.name}>
            {place > 2 ?
            <td><ThemeIcon size="lg" color="dark" >{place += 1}<Medal size={20} color="brown"/></ThemeIcon></td>
            : place == 2?
            <td><ThemeIcon size="lg" color="dark" >{place += 1}<Medal size={20} color="orange"/></ThemeIcon></td>
            : place == 1?
            <td><ThemeIcon size="lg" color="dark" >{place += 1}<Medal size={20} color="silver"/></ThemeIcon></td>
            :
            <td><ThemeIcon size="lg" color="dark" >{place += 1}<Medal size={20} color="gold"/></ThemeIcon></td>
            }            
            <td>{<Avatar />}</td>           
            <td>{element.name}</td>
            <td>{element.points}</td>                      
            </tr>
                                                       
        
    ))
    return (
        <Container style={{height:500, width:300}}>
            
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