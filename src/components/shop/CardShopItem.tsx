import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { useState } from 'react';
import AppSvc from '../../AppSvc';
import EditShopItem from './EditShopItem';

interface CardShopItemProps {
  item: any;
  showAdminOptions?: boolean;
  userCoins?: number;

}

function ShopItemCard({ item, showAdminOptions, userCoins }: CardShopItemProps) {
  const theme = useMantineTheme();

  const [editOpened, setEditOpened] = useState(false);

  const notifications = useNotifications();
  const showErrorNotification = () => notifications.showNotification({
    title: 'Error',
    message: 'You don\'t have enough JC to buy this item!',
    color: 'red'
  });

  function deleteItem(itemID: string) {
    AppSvc.deleteShopItem(itemID);
    window.location.reload();
  }

  function editItem(item: any) {
    setEditOpened(true);
  }

  function purchaseItem(itemID: string, itemPrice: number) {
    if (userCoins && userCoins < itemPrice) {
      showErrorNotification();
    }
    else {
      AppSvc.purchaseShopItem(itemID);
      window.location.reload();
    }

  }

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: '10px auto', }}>
      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit store item"
      >
        <EditShopItem item={item} setModalState={setEditOpened}></EditShopItem>
      </Modal>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={item.image_url} height={300} />
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

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Button variant="light" color="blue" style={{ marginTop: 14 }} onClick={() => purchaseItem(item.id, item.price)}>
            Purchase
          </Button>

          {showAdminOptions ? <div>
            <Button color='yellow' style={{ marginTop: 14, marginRight: 5 }} onClick={() => editItem(item)}>
              Edit
            </Button>
            <Button color='red' style={{ marginTop: 14 }} onClick={() => deleteItem(item.id)}>
              Remove
            </Button>
          </div> : ''}
        </Group>
      </Card>
    </div>
  );
}

export default ShopItemCard;