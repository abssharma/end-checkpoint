// import React from 'react';
import React from 'react';

interface TotalSumProps {
  sum: number;
}

const TotalSum: React.FC<TotalSumProps> = ({ sum }) => {
  return (
    <div>
      <h2><u>Sum of 2 Dices Combined</u>: {sum}</h2>
    </div>
  );
};

export default TotalSum;
