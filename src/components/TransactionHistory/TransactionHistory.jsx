import PropTypes from 'prop-types';
import { Table, TitleCells, Cells } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TitleCells>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TitleCells>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Cells key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Cells>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
