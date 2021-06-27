export const formatTime = (date, d) => {
  let weatherTime = new Date(date);
  let currentTime = new Date(d);

  if (weatherTime.getHours() >= currentTime.getHours()) {
    let amOrPm = weatherTime.getHours() >= 12 ? "pm" : "am";
    let hour = weatherTime.getHours() % 12 || 12;
    let finalTime = hour + ":00 " + amOrPm;
    return finalTime;
  }
};

export const getDayName = (date) => {
  var days = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var d = new Date(date);
  return days[d.getDay()];
};
