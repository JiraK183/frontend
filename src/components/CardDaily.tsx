import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal } from '@mantine/core';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';

interface CardDailyProps {
  complTasks: any;
  isLoading: boolean;
}

function DailyCard({ complTasks, isLoading }: CardDailyProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  var dailyReward = 1000;

  if(complTasks && complTasks.length > 0){
    complTasks.forEach((element: any) => {
      dailyReward += 10 * element.fields.customfield_10016;
    });
    console.log('dailyRewardAmount', dailyReward);
  }

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
        { !isLoading? 
        complTasks.length <= 0 ? 
          <>
            <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Not claimed yet!
            </Text><Button onClick={() => setOpened(true)} variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                How to claim?
            </Button>
          </> :
          <>
          <Text size="lg" style={{ color: '#edc24a', lineHeight: 3 }}>
            Main: 1000 JC<br/>
            Extra: {dailyReward - 1000} JC
          </Text>
          <Text size="xl" weight={500} style={{ color: '#edc24a', lineHeight: 1.5, fontSize:40 }}>
            Total: {dailyReward} JC
          </Text>
          </>
          :
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
              <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
          </div>
      </div>} 
      </Card>
    </div>
    </>
  );
}

export default DailyCard;