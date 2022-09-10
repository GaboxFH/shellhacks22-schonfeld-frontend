import React from 'react';

import '../styles/Quote.css';

const Quote = ({quote}) => {
    return (
        <div className='quote-container'>
          <p className="quote"> Security id:
            "{quote.security_id
}"
          </p>
          <p className="quote-author">
          cusip:
            <span className='highlight'> {quote.cusip} </span>
          </p>
          <p className="quote-author">
          sedol:
            <span className='highlight'> {quote.sedol} </span>
          </p>
        </div>
      );
};

export default Quote;
