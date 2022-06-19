import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Table } from '@mantine/core';
import { Key } from 'react';
import { MoonLoader } from 'react-spinners';

interface CardTasksProps {
    tasks: any;
    isLoading: boolean;
}

function TasksCard({ tasks, isLoading }: CardTasksProps) {
    const theme = useMantineTheme();

    console.log('tasks', tasks);

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div style={{ margin: 'auto' }}>
            <Card shadow="sm" p="lg" style={{ height: 350, width: 400 }}>
                <Text weight={500} size="lg">My Jira tasks</Text>
                <Table verticalSpacing="xs" striped>
                    <thead>
                        <tr>
                            <th>Issue ID</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {!isLoading ?
                            tasks && tasks.length > 0 ?
                                tasks.map((task: any) => (
                                    <tr key={task.key}>
                                        <td>
                                            <Button variant="light" color="blue" style={{ marginTop: 14 }} onClick={() => window.open(task.url, "_blank")}>
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
                                )) : <td colSpan={3}><span style={{display:'flex', justifyContent:'center', marginTop:'15px'}}>You don't have any tasks currently</span></td>
                            : <td colSpan={4}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
                                        <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
                                    </div>
                                </div>
                            </td>}
                    </tbody>
                </Table>
                {/*
                    <tbody>
                        {tasks.map((task: any) => (
                            <tr key={task.key}>
                                <td><a href={task.self}>{task.key} </a></td>
                                <td>{task.fields.issuetype.name} </td>
                                <td>{task.fields.priority.name} </td>
                                <td>{task.fields.status.name} </td>
                            </tr>))}
                    </tbody>
                </Table>*/}
            </Card>
        </div>
    );
}

export default TasksCard;