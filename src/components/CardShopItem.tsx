import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { statSync } from 'fs';
import AppSvc from '../AppSvc';

interface CardShopItemProps {
  item: any;
}

function ShopItemCard({ item }: CardShopItemProps) {
  const theme = useMantineTheme();

  console.log(item);

  function deleteItem (itemID: string) {
    AppSvc.deleteShopItem(itemID);
  }

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: '10px auto' ,}}>
      <Card shadow="sm" p="lg">
        <Button color='red' style={{float:'right', zIndex:10}} onClick={()=> deleteItem(item.id)}>Remove</Button>
        <Card.Section>
          <Image src={item.image} height={300} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{item.name}</Text>
          <Badge color="pink" variant="light">
            {item.price} JC
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {item.description}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Purchase
        </Button>
      </Card>
    </div>
  );
}

export default ShopItemCard;