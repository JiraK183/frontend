import {
    TextInput,
    Paper,
    Button,
    Space,
    NumberInput,
} from '@mantine/core';

import React, { useState } from 'react';
import AppSvc from '../../AppSvc';

interface EditShopItemProps {
    item:any;
    setModalState: any;
}

function EditShopItem({item, setModalState}: EditShopItemProps) {

    const [title, setTitle] = useState(item.name);
    const [desc, setDesc] = useState(item.description);
    const [imageUrl, setImageUrl] = useState(item.image_url);
    const [price, setPrice] = useState(item.price);

    function editItem (item: any) {
        AppSvc.editShopItem(item.id, {title,desc,imageUrl,price});
        window.location.reload();
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

            <Button onClick={() => editItem(item)}
                color='green'
                size='md'>
                Confirm
            </Button>

        </Paper>
    );
}

export default EditShopItem;