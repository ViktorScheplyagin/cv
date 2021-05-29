export function calcAge(born: Date): number {
  const date: Date = new Date();

  date.setFullYear(date.getFullYear() - born.getFullYear());
  date.setMonth(date.getMonth() - born.getMonth());
  date.setDate(date.getDate() - born.getDate());

  return date.getFullYear();
}
