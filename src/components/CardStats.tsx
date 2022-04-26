import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { statSync } from 'fs';

interface CardStatsProps {
  stats: any;
}

function StatsCard({ stats }: CardStatsProps) {
  const theme = useMantineTheme();

  console.log(stats);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg" style={{ height: 350, width: 400 }}>
        <Text weight={500} size="lg">Statistics</Text>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Daily streak:
          </Text>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {stats.daily_streak}
          </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Previous workday profit:
          </Text>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {stats.previous_workday_profit}
          </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Weekly profit:
          </Text>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {stats.weekly_profit}
          </Text>
        </Group>
      </Card>
    </div>
  );
}

export default StatsCard;