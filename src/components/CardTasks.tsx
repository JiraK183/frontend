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
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                        Do this
                    </Button>
                    <Badge color="pink" variant="light">
                        Critical
                    </Badge>
                </Group>
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                        Do that
                    </Button>
                    <Badge color="red" variant="light">
                        High
                    </Badge>
                </Group>
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                        Do something else
                    </Button>
                    <Badge color="yellow" variant="light">
                        Medium
                    </Badge>
                </Group>
                <Table verticalSpacing="xs" striped>
                    {/* <thead>
                        <tr>
                            <th>Top #</th>
                            <th colSpan={2}>User</th>
                            <th>Coins</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {tasks.map((task: any) => (
                            <tr key={task.key}>
                                <td><a href={task.self}>{task.key} </a></td>
                                <td>{task.fields.issuetype.name} </td>
                                <td>{task.fields.priority.name} </td>
                                <td>{task.fields.status.name} </td>
                            </tr>))}
                    </tbody>
                </Table>


            </Card>
        </div>
    );
}

export default TasksCard;