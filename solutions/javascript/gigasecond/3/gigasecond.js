//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const giga = 10 ** 12;

export const gigasecond = (inputDate) => {
  return new Date(inputDate.getTime() + giga);
};
