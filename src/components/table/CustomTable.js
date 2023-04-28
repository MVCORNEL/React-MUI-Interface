import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import CustomTableHeader from './CustomTableHeader';
import CustomTableToolbar from './CustomTableToolbar';
import { stableSort, getComparator } from './tableFunctionsMui';
import PropTypes from 'prop-types';

//MODIFIED VERION OF https://mui.com/material-ui/react-table/, extra functionality
/**
 * Function representing a functional table  component that consists from 3 part @function CustomTableHeader, @function CustomTableToolbar and the table record.
 * The table will automatically generate the rows based on the provided object information by using @function createRow function
 * The table will sort the record based on the pressed headers @function CustomTableHeader
 * The table listened for event coming out from the @function CustomTableToolbar
 *
 * @prop {array} rows data expected
 * @prop {array} headCells a configuration obkject for the table.
 * @returns
 */
export default function CustomTable({ rows, headCells }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //CUSTOM FUNCTIONS
    const handleEditButtonPressed = (event) => {
        console.log('Pressed Edit');
    };
    const handleDeleteButtonPressed = (event) => {
        console.log('Pressed Delete');
    };
    const handleAddButtonPressed = (event) => {
        console.log('Pressed Add');
    };

    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const isSelected = (name) => selected.indexOf(name) !== -1;
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    //MUI FUNCTION TAKEN FROM https://mui.com/material-ui/react-table/
    const visibleRows = React.useMemo(() => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage]);
    //MUI FUNCTION TAKEN AND CUSTOMIZED FROM https://mui.com/material-ui/react-table/

    /**
     * Function used to dynamically create a table row based on the information  provided.
     * @param {object} currentRow information about the current record
     * @param {boolean} isItemSelected the current item selection state
     * @param {string} labelId current record label id
     * @returns
     */
    const createRow = (currentRow, isItemSelected, labelId) => {
        return (
            <TableRow
                hover
                onClick={(event) => handleClick(event, currentRow.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={currentRow.name}
                selected={isItemSelected}
                sx={{ cursor: 'pointer' }}
            >
                {Object.keys(currentRow).map(function (key, index) {
                    if (index === 0) {
                        return (
                            <React.Fragment key={index}>
                                <TableCell padding="checkbox" key={index - 1}>
                                    <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </TableCell>
                                <TableCell key={index} component="th" id={labelId} scope="row" padding="none">
                                    {currentRow[key]}
                                </TableCell>
                            </React.Fragment>
                        );
                    } else {
                        return (
                            <TableCell key={index} align="right">
                                {currentRow[key]}
                            </TableCell>
                        );
                    }
                })}
            </TableRow>
        );
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <CustomTableToolbar numSelected={selected.length} onAddPressed={handleAddButtonPressed} />
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="mediun">
                        <CustomTableHeader
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return createRow(row, isItemSelected, labelId);
                            })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

//DATA TYPE VALIDATION
CustomTable.propTypes = {
    rows: PropTypes.array.isRequired,
    headCells: PropTypes.array.isRequired,
};
