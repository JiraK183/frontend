import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Table } from '@mantine/core';
import { Key } from 'react';

interface CardTasksProps {
    tasks: any;
}

function TasksCard({ tasks }: CardTasksProps) {
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
                    {tasks.map((task: any) => (
                        <tr key={task.key}>
                            <td>
                                <Button variant="light" color="blue" style={{ marginTop: 14 }} onClick={()=> window.open(task.url, "_blank")}>
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