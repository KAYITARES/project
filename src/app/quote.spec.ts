import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote("ab","cd","ef",new Date(2019,0,26))).toBeTruthy();
  });
});
