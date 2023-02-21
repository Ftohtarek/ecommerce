import { MaxPipe } from './max-length.pipe';

describe('MaxPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxPipe();
    expect(pipe).toBeTruthy();
  });
});
