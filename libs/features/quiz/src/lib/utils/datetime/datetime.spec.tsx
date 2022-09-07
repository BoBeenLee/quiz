import { getMinutesAndSeconds, todayTime } from './datetime';

describe('datetime', () => {
  test('should be getMinutesAndSeconds 10minutes 0seconds', () => {
    const { minutes, seconds } = getMinutesAndSeconds(10 * 60 * 1000);
    expect(minutes).toBe(10);
    expect(seconds).toBe(0);
  });

  test('should be getMinutesAndSeconds 0minutes 10seconds', () => {
    const { minutes, seconds } = getMinutesAndSeconds(10 * 1000);
    expect(minutes).toBe(0);
    expect(seconds).toBe(10);
  });

  test('should be getMinutesAndSeconds 0minutes 10seconds', () => {
    const { minutes, seconds } = getMinutesAndSeconds(
      10 * 60 * 1000 + 10 * 1000
    );
    expect(minutes).toBe(10);
    expect(seconds).toBe(10);
  });

  test('should be todayTime', () => {
    expect(todayTime()).toBe(todayTime());
  });
});
