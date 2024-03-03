export function countDatesByMonth(dateArray) {
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const monthCount = {};

  monthNames.forEach(monthName => {
    monthCount[monthName] = 0;
  });

  dateArray.forEach(dateStr => {
    const monthIndex = parseInt(dateStr.split('/')[1]) - 1;
    const monthName = monthNames[monthIndex];
    monthCount[monthName]++;
  });

  return monthCount;
}

export function countDaysInMonth(dateArray, targetMonth) {
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());

  if (targetMonthIndex === -1) {
    return 0;
  }

  let daysCount = 0;
  dateArray.forEach(dateStr => {
    const monthIndex = parseInt(dateStr.split('/')[1]) - 1; // Subtract 1 to convert to 0-based index

    if (monthIndex === targetMonthIndex) {
      daysCount++;
    }
  });

  return daysCount;
}

export function getCurrentMonth() {
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];

  return currentMonthName;
}