import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { statSync } from 'fs';

interface CardShopItemProps {
  stats: any;
}

function ShopItemCard({ stats }: CardShopItemProps) {
  const theme = useMantineTheme();

  console.log(stats);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: '10px auto' ,}}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={stats.image} height={300} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{stats.name}</Text>
          <Badge color="pink" variant="light">
            {stats.price} JC
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {stats.description}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Purchase
        </Button>
      </Card>
    </div>
  );
}

export default ShopItemCard;