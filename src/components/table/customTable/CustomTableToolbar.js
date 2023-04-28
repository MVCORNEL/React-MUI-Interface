import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

//MUI FUNCTION TAKEN AND CUSTOMIZED FROM https://mui.com/material-ui/react-table/
/**
 * Functional component representing a table toolbar.
 * Depending of how many records are selected the table will make available three event ->
 * If no record is selected the create record button will be avaialble
 * If one record is selected the edit and delete buttons will available
 * If more records are selected the delete button will available
 * @prop {string} header table header, if is not specified the table header will be 'Table'
 * @prop {number} numSelected how many elemets are currently selected
 * @prop {function} onAddPressed callback function responsible for the functionality of the form when the add btn is pressed
 * @prop {function} onDeletePressed callback function responsible for the functionality of the form when the delete btn is pressed
 * @prop {function} onEditPressed callback function responsible for the functionality of the form when the edit btn is pressed
 *
 *
 */
const CustomTableToolbar = ({ header = 'Table', numSelected, onAddPressed, onDeletePressed, onEditPressed }) => {
    return (
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
                        <Tooltip onClick={onDeletePressed}>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Tooltip title="Delete">
                        <IconButton onClick={onEditPressed}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            ) : (
                <Tooltip title="Add">
                    <IconButton onClick={onAddPressed}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

CustomTableToolbar.propTypes = {
    header: PropTypes.string.isRequired,
    numSelected: PropTypes.number.isRequired,
    onAddPressed: PropTypes.func.isRequired,
    onDeletePressed: PropTypes.func.isRequired,
    onEditPressed: PropTypes.func.isRequired,
};

export default CustomTableToolbar;
