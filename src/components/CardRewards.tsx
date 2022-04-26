import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface CardRewardsProps {
    complTasks: any;
}

function RewardsCard({ complTasks }: CardRewardsProps) {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const rows = complTasks.map((task: any) => (
        <tr key={task.name}>
            <td>{task.name}</td>
        </tr>
    ))

    return (
        <div style={{ margin: 'auto' }}>
            <Card shadow="sm" p="lg" style={{ height: 350, width: 400 }}>
                <Text weight={500} size="lg">
                    Completed tasks
                </Text>
                {complTasks && complTasks.length > 0 ? rows :
                 
                <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    No tasks completed today!
                </Text>}
                
            </Card>
        </div>
    );
}

export default RewardsCard;