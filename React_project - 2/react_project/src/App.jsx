import React, { useState } from 'react';
import { Button, List, ListItem } from '@mui/material';

const App = () => {
    const [arrayIndex, setArrayIndex] = useState(0);
    const [arrayList, setArrayList] = useState([]);

    const addItem = () => {
        setArrayList([...arrayList, `Item ${arrayList.length + 1}`]);
    };

    const removeItem = () => {
        if (arrayList.length > 0) {
            setArrayList(arrayList.slice(0, -1));
        }
    };

    const moveDown = () => {
        if (arrayIndex < arrayList.length - 1) {
            setArrayIndex(arrayIndex + 1);
        } else {
            setArrayIndex(0);
        }
    };

    const moveUp = () => {
        if (arrayIndex > 0) {
            setArrayIndex(arrayIndex - 1);
        } else {
            setArrayIndex(arrayList.length - 1);
        }
    };

    return (
        <div>
            <List>
                {arrayList.map((item, index) => (
                    <ListItem key={index} selected={arrayIndex === index}>
                        {item}
                    </ListItem>
                ))}
            </List>
            <Button onClick={addItem}>Add</Button>
            <Button onClick={removeItem}>Remove</Button>
            <Button onClick={moveDown}>Down</Button>
            <Button onClick={moveUp}>Up</Button>
        </div>
    );
};

export default App;
