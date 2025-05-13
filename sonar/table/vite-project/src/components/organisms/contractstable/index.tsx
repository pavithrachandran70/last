
import {CONTRACTS_TABLE_HEADERS}  from "../../../utils/constants";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const dummyContracts=[
    {
        name: 'Alpha Inc.', status: 'Active', type: 'Recurring', perPayment: '$500', total: '$5000'
    },
]

export const ContractsTable=()=>{
    return(
    <Table>
        <TableHead>
            <TableRow>
            {CONTRACTS_TABLE_HEADERS.map((header)=>(
                <TableCell key={header}>{header}</TableCell>
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {dummyContracts.map((row,idx)=>(
                <TableRow key={idx}>
                    <TableCell>{row.name}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.type}</TableCell>
          <TableCell>{row.perPayment}</TableCell>
          <TableCell>{row.total}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}