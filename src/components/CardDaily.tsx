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
        title="To claim the daily reward you need to finish any task assigned to you in Jira.
         Extra JC will be gained depending on the amount of story points of the completed task."
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