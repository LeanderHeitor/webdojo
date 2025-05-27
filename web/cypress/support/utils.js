export function getFormattedCurrentDate() {
  const today = new Date();

  // .getDate() returns the day of the month (1-31)
  const day = String(today.getDate()).padStart(2, '0');
  
  // .getMonth() returns the month (0-11), so we add 1
  const month = String(today.getMonth() + 1).padStart(2, '0');
  
  // .getFullYear() returns the year (e.g., 2025)
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}