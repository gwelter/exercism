//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  const giga = 1000000000000;
  const time = inputDate.getTime();
  return new Date(time + giga);
};
