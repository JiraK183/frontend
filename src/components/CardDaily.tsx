import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function DailyCard() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg" style={{ height: 350, width: 600}}>
        <Text weight={500} size="lg" >
          Daily reward
        </Text>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Not claimed yet!
        </Text>
        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          How to claim?
        </Button>
      </Card>
    </div>
  );
}

export default DailyCard;