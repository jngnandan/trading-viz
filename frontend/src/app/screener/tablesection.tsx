import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { visuallyHidden } from '@mui/utils';

interface Data {
  id: string;
  ticker: string;
  Company: string;
  Sector: string;
  Industry: string;
  Market: string;
  PE: number | null;
  EPS: number | null;
  MarketCap: number | null;
  BookValue: number | null;
  DividendYield: number | null;
  EBITDA: number | null;
  PriceToSalesTrailing12Months: number | null;
  FiftyTwoWeekHigh: number | null;
  FiftyTwoWeekLow: number | null;
  FiftyDayMovingAverage: number | null;
  TwoHundredDayMovingAverage: number | null;
  SharesOutstanding: number | null;
  Price: number | null;
  Quantity: number;
  Invested: number | null;
  Weight: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: 'ticker', numeric: false, disablePadding: true, label: 'Ticker' },
  { id: 'Company', numeric: false, disablePadding: false, label: 'Company' },
  { id: 'Sector', numeric: false, disablePadding: false, label: 'Sector' },
  { id: 'Industry', numeric: false, disablePadding: false, label: 'Industry' },
  { id: 'Market', numeric: false, disablePadding: false, label: 'Market' },
  { id: 'PE', numeric: true, disablePadding: false, label: 'PE' },
  { id: 'EPS', numeric: true, disablePadding: false, label: 'EPS' },
  { id: 'MarketCap', numeric: true, disablePadding: false, label: 'Market Cap' },
  { id: 'BookValue', numeric: true, disablePadding: false, label: 'Book Value' },
  { id: 'DividendYield', numeric: true, disablePadding: false, label: 'Dividend Yield' },
  { id: 'EBITDA', numeric: true, disablePadding: false, label: 'EBITDA' },
  { id: 'PriceToSalesTrailing12Months', numeric: true, disablePadding: false, label: 'Price to Sales' },
  { id: 'FiftyTwoWeekHigh', numeric: true, disablePadding: false, label: '52 Week High' },
  { id: 'FiftyTwoWeekLow', numeric: true, disablePadding: false, label: '52 Week Low' },
  { id: 'FiftyDayMovingAverage', numeric: true, disablePadding: false, label: '50 Day Moving Average' },
  { id: 'TwoHundredDayMovingAverage', numeric: true, disablePadding: false, label: '200 Day Moving Average' },
  { id: 'SharesOutstanding', numeric: true, disablePadding: false, label: 'Shares Outstanding' },
  { id: 'Price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'Quantity', numeric: true, disablePadding: false, label: 'Quantity' },
  { id: 'Invested', numeric: true, disablePadding: false, label: 'Invested' },
  { id: 'Weight', numeric: true, disablePadding: false, label: 'Weight' },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all stocks' }}
            sx={{ verticalAlign: 'middle' }}
          />
        </th>
        {headCells.map((headCell) => (
          <th
            key={headCell.id}
            aria-sort={orderBy === headCell.id ? (order === 'asc' ? 'ascending' : 'descending') : undefined}
            style={{
              width: headCell.id === 'PriceToSalesTrailing12Months' ? 150 : headCell.numeric ? 100 : 'auto',
              minWidth: headCell.id === 'PriceToSalesTrailing12Months' ? 100 : headCell.numeric ? 80 : 70,
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            <Link
              underline="none"
              color="neutral"
              textColor={orderBy === headCell.id ? 'primary.plainColor' : undefined}
              component="button"
              onClick={createSortHandler(headCell.id)}
              fontWeight="lg"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': { '& svg': { opacity: 1 } },
              }}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              )}
            </Link>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default function TableSelection() {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('ticker');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [stocks, setStocks] = useState<Data[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch('http://localhost:8000/stocks/');
        const data = await response.json();
        setStocks(data.stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };
    fetchStocks();
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = stocks.map((stock) => stock.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        boxShadow: 'sm',
        borderRadius: 'sm',
        overflowX: 'auto',
      }}
    >
      <Table aria-labelledby="tableTitle" sx={{ overflowX: 'auto' }}>
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={stocks.length}
        />
        <tbody>
          {stableSort(stocks, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((stock, index) => {
              const isItemSelected = selected.indexOf(stock.id) !== -1;
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <tr
                  key={stock.id}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  onClick={(event) => handleClick(event, stock.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </td>
                  <td id={labelId}>{stock.ticker}</td>
                  <td style={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>{stock.Company}</td>
                  <td style={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>{stock.Sector}</td>
                  <td style={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>{stock.Industry}</td>
                  <td>{stock.Market}</td>
                  <td>{stock.PE}</td>
                  <td>{stock.EPS}</td>
                  <td>{stock.MarketCap}</td>
                  <td>{stock.BookValue}</td>
                  <td>{stock.DividendYield}</td>
                  <td>{stock.EBITDA}</td>
                  <td>{stock.PriceToSalesTrailing12Months}</td>
                  <td>{stock.FiftyTwoWeekHigh}</td>
                  <td>{stock.FiftyTwoWeekLow}</td>
                  <td>{stock.FiftyDayMovingAverage}</td>
                  <td>{stock.TwoHundredDayMovingAverage}</td>
                  <td>{stock.SharesOutstanding}</td>
                  <td>{stock.Price}</td>
                  <td>{stock.Quantity}</td>
                  <td>{stock.Invested}</td>
                  <td>{stock.Weight}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <FormControl sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          inputProps={{ 'aria-label': 'Rows per page' }}
          sx={{ width: 'auto' }}
        >
          <Option value={5}>5</Option>
          <Option value={10}>10</Option>
          <Option value={25}>25</Option>
        </Select>
      </FormControl>
    </Sheet>
  );
}
