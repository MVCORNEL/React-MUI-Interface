import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Stack, Tooltip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Form } from 'react-router-dom';
import ProductDialogForm from '../../../forms/ProductDialogForm';
import UserDialog from '../../../forms/UserDialogForm';

//MUI FUNCTION TAKEN AND CUSTOMIZED FROM https://mui.com/material-ui/react-table/
/**
 * Functional component representing a table toolbar.
 * Depending of how many records are selected the table will make available three event ->
 * If no record is selected the create record button will be avaialble
 * If one record is selected the edit and delete buttons will available
 * If more records are selected the delete button will available
 * @prop {string} header table header, if is not specified the table header will be 'Table'
 * @prop {number} numSelected how many elemets are currently selected
 * @prop {array} selectedList the array of selected IDs
 *
 */
const CustomTableToolbar = ({ header = 'Table', numSelected, selectedList }) => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('POST');
    const [editId, setEditId] = useState('');

    const handleClose = () => {
        setOpen(false);
        setEditId('');
    };

    const handleClickEdit = (e) => {
        setMode('PATCH');
        setEditId(selectedList[0]);
        setOpen(true);
    };

    const handleClickAdd = (e) => {
        setOpen(true);
        setMode('POST');
    };

    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    ...(numSelected > 0 && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                    }),
                }}
            >
                {numSelected > 0 ? (
                    <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                        {header}
                    </Typography>
                )}
                {/* DYNAMIC TOOLBAR BASED ON HOW MANY RECORD ARE SELECTED */}
                {numSelected > 0 ? (
                    <Stack direction={'row'}>
                        {numSelected === 1 && (
                            <Tooltip>
                                <IconButton onClick={handleClickEdit}>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        <Form method="DELETE" action={`?tab=${header.toLowerCase()}`}>
                            <input type="hidden" name="key" value="value" />
                            <IconButton component="button" type="submit">
                                {/* PASS THE IDS FOR THE REQUIRED TO DELETE ELEMENTS */}
                                <input type="hidden" name="ids" value={selectedList} />
                                <DeleteIcon />
                            </IconButton>
                        </Form>
                    </Stack>
                ) : (
                    <Tooltip title="Add">
                        <IconButton onClick={handleClickAdd}>
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            {/* PASS THE ID FOR THE REQUIRED TO EDIT ELEMENT */}
            {header === 'Products' && <ProductDialogForm mode={mode} open={open} onClose={handleClose} id={editId} />}
            {header === 'Users' && <UserDialog mode={mode} open={open} onClose={handleClose} id={editId} />}
        </React.Fragment>
    );
};

CustomTableToolbar.propTypes = {
    header: PropTypes.string.isRequired,
    numSelected: PropTypes.number.isRequired,
    selectedList: PropTypes.array.isRequired,
};

export default CustomTableToolbar;
