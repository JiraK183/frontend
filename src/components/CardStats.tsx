import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { statSync } from 'fs';
import { PulseLoader } from 'react-spinners';

interface CardStatsProps {
  stats: any;
  isLoading: boolean;
}

function StatsCard({ stats, isLoading }: CardStatsProps) {
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
            { !isLoading? stats.daily_streak : <PulseLoader color='gray' speedMultiplier={0.75} size={10}></PulseLoader>}
          </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Previous workday profit:
          </Text>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            { !isLoading? stats.previous_workday_profit : <PulseLoader color='gray' speedMultiplier={0.75} size={10}></PulseLoader>}
          </Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Weekly profit:
          </Text>
          <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            { !isLoading? stats.weekly_profit : <PulseLoader color='gray' speedMultiplier={0.75} size={10}></PulseLoader>}
          </Text>
        </Group>
      </Card>
    </div>
  );
}

export default StatsCard;