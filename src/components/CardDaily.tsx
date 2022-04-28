import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from '@mantine/core';
import { useState } from 'react';

function DailyCard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="To claim daily reward need to make any action in Jira (Ex: replace task from 'IN PROGRESS' to 'DONE')"
      >
        {/* Modal content */}
      </Modal>
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg" style={{ height: 350, width: 400}}>
        <Text weight={500} size="lg" >
          Daily reward
        </Text>
        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Not claimed yet!
        </Text>
        <Button onClick={() => setOpened(true)} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          How to claim?
        </Button>       
      </Card>
    </div>
    </>
  );
}

export default DailyCard;