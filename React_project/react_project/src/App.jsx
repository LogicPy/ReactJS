import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function ListManager() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleAdd = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    const handleRemove = () => {
        if (items.length > 0) {
            const newItems = items.filter((_, index) => index !== selectedIndex);
            setItems(newItems);
            setSelectedIndex(Math.max(0, selectedIndex - 1));
        }
    };

    const handleScroll = (direction) => {
        let newIndex = direction === 'up' ? selectedIndex - 1 : selectedIndex + 1;
        newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
        setSelectedIndex(newIndex);
    };

    return (
        <Paper style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
            <Typography variant="h6" style={{ marginBottom: '20px' }}>
                List Manager
            </Typography>
            <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        button
                        selected={index === selectedIndex}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={() => handleScroll('up')}>
                    Up
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleScroll('down')}>
                    Down
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button variant="contained" color="success" onClick={handleAdd}>
                    Add
                </Button>
                <Button variant="contained" color="error" onClick={handleRemove}>
                    Remove
                </Button>
            </div>
        </Paper>
    );
}

export default ListManager;
