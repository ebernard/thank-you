// Number of seconds since start date
export const getCurrentCounter = (ctx) => {
  const now = new Date();
  const utcMillisecondsSinceStart =
    now.getTime() + now.getTimezoneOffset() * 60 * 1000 - ctx.start.getTime();
  return Math.floor(utcMillisecondsSinceStart / 1000);
};

// Completion percentage
export const getCurrentPercentage = (ctx) => {
  const now = new Date();
  const utcMillisecondsSinceStart =
    now.getTime() + now.getTimezoneOffset() * 60 * 1000 - ctx.start.getTime();
  const total = ctx.end - ctx.start;
  return (utcMillisecondsSinceStart / total) * 100;
};

export const defaultContext = {
  start: new Date(Date.UTC(2021, 2, 1, 0, 0, 0)),
  end: new Date(Date.UTC(2021, 4, 1, 0, 0, 0)),
  max: 100000000,
  imageNumber: 3,
  textNumber: 4,
  interval: 1000,
};
