import fc from 'fast-check';

import getMaximumLoanAmount from './loan-calculator';

describe('loan-calculator', () => {
  test('correctly calculates maximum loan amount', () => {
    expect(getMaximumLoanAmount(1000)).toEqual(490);
  });
});
