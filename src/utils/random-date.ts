export const randomDate = (start?: Date, end?: Date) => {
  if (!start) {
    start = new Date();
    start.setFullYear(start.getFullYear() - 1);
  }

  if (!end) end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
