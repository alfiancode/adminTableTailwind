const dateFormater = (params: string | number | Date) => {
  var date = new Date(params);
  var day = date.getDate().toString().padStart(2, "0");
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var year = date.getFullYear().toString().slice(-2);
  var dayName = date.toLocaleString("en-US", { weekday: "long" }).toUpperCase();
  var hour = date.getHours().toString().padStart(2, "0");
  var minute = date.getMinutes().toString().padStart(2, "0");
  var formattedDate = `${day}.${month}.${year} ${dayName} ${hour}:${minute}`;

  return formattedDate;
};

export default dateFormater;
