import React from 'react';

import '../styles/Quote.css';

const Quote = ({quote}) => {
  return (
      <tr className='quote-table'>
        <td className="quote">
          <span className='highlight'> {quote.security_id} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.cusip} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.sedol} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.isin} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.ric} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.bloomberg} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.bbg} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.symbol} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.root_symbol} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.bb_yellow} </span>
        </td>
        <td className="quote-author">
          <span className='highlight'> {quote.spn} </span>
        </td>
      </tr>
    );
};
    
export default Quote;
