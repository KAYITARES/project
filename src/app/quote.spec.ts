import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote("","ab","cd","ef",0,0,new Date(2019,0,26))).toBeTruthy();
  });
});
