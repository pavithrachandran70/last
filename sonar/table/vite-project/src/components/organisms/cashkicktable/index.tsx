import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { CASH_KICK_TABLE_HEADERS } from '../../../utils/constants';

const dummyKicks = [
  { name: 'Kickstart Fund', status: 'Completed', maturity: '12 months', received: '$1000', financed: '$1200' },
];

export const CashKickTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        {CASH_KICK_TABLE_HEADERS.map((header) => (
          <TableCell key={header}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyKicks.map((row, idx) => (
        <TableRow key={idx}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.maturity}</TableCell>
          <TableCell>{row.received}</TableCell>
          <TableCell>{row.financed}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
