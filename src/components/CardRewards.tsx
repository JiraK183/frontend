import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function RewardsCard() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div style={{ width: 340, margin: 'auto' }}>
            <Card shadow="sm" p="lg">
                <Text weight={500} size="lg">
                    Completed tasks
                </Text>
                <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    No tasks completed today!
                </Text>
            </Card>
        </div>
    );
}

export default RewardsCard;