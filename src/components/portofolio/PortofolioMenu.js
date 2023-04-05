import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';

/**
 * Component representing a Group of selectable buttons. 
 * One button can be selected at a time, and the chosen button has a different colour. 
 * 
 * @prop {array} menuItems - expects a list of objects in the format (index,category) value/pair.

 */
const PortofolioMenu = ({ menuItems }) => {
    const [categoryIndex, setCategoryIndex] = useState(0);

    // function used to change the state of the category index, based on the current pressed button
    //@param [event] expect a event object, resulting from clicking a button
    const handleChangeCategory = (event) => {
        setCategoryIndex(event.target.tabIndex);
    };

    return (
        <ButtonGroup aria-label="text button group" size="large" sx={{ marginTop: '5rem', marginBottom: '5rem' }}>
            {menuItems.map((element) => {
                return (
                    <Button key={element.index} tabIndex={element.index} onClick={handleChangeCategory} variant={element.index === categoryIndex ? 'contained' : 'text'}>
                        {element.category}
                    </Button>
                );
            })}
        </ButtonGroup>
    );
};

export default PortofolioMenu;
