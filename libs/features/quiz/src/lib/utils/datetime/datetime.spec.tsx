import { getMinutesAndSeconds } from './datetime';

describe('datetime', () => {
  it('should be getMinutesAndSeconds 10minutes 0seconds', () => {
    const { minutes, seconds } = getMinutesAndSeconds(10 * 60 * 1000);
    expect(minutes).toBe(10);
    expect(seconds).toBe(0);
  });
});
