import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Table } from '@mantine/core';
import { MoonLoader } from 'react-spinners';

interface CardRewardsProps {
    complTasks: any;
    isLoading: boolean;
}

function RewardsCard({ complTasks, isLoading }: CardRewardsProps) {
    const theme = useMantineTheme();

    console.log('CompletedTasks', complTasks);

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div style={{ margin: 'auto' }}>
            <Card shadow="sm" p="lg" style={{ height: 350, width: 400 }}>
                <Text weight={500} size="lg">
                    Completed tasks
                </Text>

                {!isLoading ?
                    complTasks && complTasks.length > 0 ?
                        <Table verticalSpacing="xs" striped>
                            <thead>
                                <tr>
                                    <th>Issue ID</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complTasks.map((task: any) => (
                                    <tr key={task.key}>
                                        <td>
                                            <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                                                {task.key}
                                            </Button>
                                        </td>
                                        <td>
                                            <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                                {task.fields.issuetype.name}
                                            </Text>
                                        </td>
                                        <td>
                                            <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                                {task.fields.status.name}
                                            </Text>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> :

                        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                            No tasks completed today!
                        </Text> :
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
                            <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
                        </div>
                    </div>}

            </Card>
        </div>
    );
}

export default RewardsCard;