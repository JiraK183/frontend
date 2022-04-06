import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function TasksCard() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div style={{ margin: 'auto' }}>
            <Card shadow="sm" p="lg">
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
            </Card>
        </div>
    );
}

export default TasksCard;