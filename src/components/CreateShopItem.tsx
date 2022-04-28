import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Space,
    NumberInput,
} from '@mantine/core';

import React, { useState } from 'react';
import AppSvc from '../AppSvc';

interface CreateShopItemProps {
    setModalState: any;
}


function CreateShopItem({setModalState}: CreateShopItemProps) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);

    function createItem (title: string, desc: string, imgUrl: string, price: number) {
        AppSvc.createShopItem(title, desc, imageUrl,price);
        setModalState(false);
    }

    return (
        <Paper radius="md" p="xl" >

            <TextInput
                placeholder="Title"
                label="Title"
                size="md"
                required
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}

            />
            <Space h="xs" />

            <TextInput
                placeholder="Description"
                label="Description"
                size="md"
                value={desc}
                onChange={(event) => setDesc(event.currentTarget.value)}
            />
            <Space h="xs" />

            <TextInput
                placeholder="URL"
                label="Image URL"
                size="md"
                required
                value={imageUrl}
                onChange={(event) => setImageUrl(event.currentTarget.value)}
                
            />
            <Space h="xs" />

            <NumberInput
                placeholder="10000"
                label="Price"
                size="md"
                required
                value={price}
                onChange={(val) => setPrice(val? val : 0)}
            />

            <Space h="md" />

            <Button onClick={() => createItem(title, desc, imageUrl,price)}
                color='green'
                size='md'>
                Create
            </Button>

        </Paper>
    );
}

export default CreateShopItem;