export function convertTimeStringToDate(timeString: string): Date {
  const [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  const now = new Date();
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(0);
  now.setMilliseconds(0);

  return now;
}
