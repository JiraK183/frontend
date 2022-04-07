import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function StatsCard() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg" style={{ height: 350, width: 600}}>
          <Text weight={500} size="lg">Statistics</Text>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Daily streak:
        </Text>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          269
        </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Previous workday profit:
        </Text>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          +4205
        </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Weekly profit:
        </Text>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          -120
        </Text>
        </Group>
      </Card>
    </div>
  );
}

export default StatsCard;