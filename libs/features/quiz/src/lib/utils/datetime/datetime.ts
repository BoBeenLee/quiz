export const parseDate = (dateTime: string) => {
  return new Date(dateTime);
};

export const today = () => {
  return new Date();
};

export const yesterday = () => {
  return new Date(new Date().valueOf() - 24 * 60 * 60 * 1000);
};

export const todayTime = () => {
  return new Date().getTime();
};

export const getMinutesAndSeconds = (durationTime: number) => {
  const totalSeconds = durationTime / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  return {
    minutes,
    seconds: totalSeconds % 60,
  };
};
