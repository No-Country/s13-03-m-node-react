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
    const monthIndex = parseInt(dateStr.split('/')[1]) - 1;

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

export function getWorkingDaysSinceStartOfMonth() {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();

  let workingDaysCount = 0;

  for (let day = 1; day <= currentDayOfMonth; day++) {
    const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

    const dayOfWeek = currentDay.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      workingDaysCount++;
    }
  }

  return workingDaysCount;
}

export function hasMonthPassed(targetMonth) {
  const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());

  if (targetMonthIndex === -1) {
    return false;
  }

  return currentMonthIndex > targetMonthIndex;
}

export function getTotalAsistencias(totalMes) {
  const currentMonthAsistencias = getWorkingDaysSinceStartOfMonth()
  const previousMonthAsistencias = new Date().getMonth() * totalMes

  return currentMonthAsistencias + previousMonthAsistencias
}