import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { statSync } from 'fs';

interface CardInvItemProps {
  item: any;
}

function InvItemCard({ item }: CardInvItemProps) {
  const theme = useMantineTheme();

  console.log(item);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: '10px auto' ,}}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={item.image_url} height={300} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{item.name}</Text>         
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {item.description}
        </Text>       
      </Card>
    </div>
  );
}

export default InvItemCard;