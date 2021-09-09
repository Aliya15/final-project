function formatDateTimeNumber(number) {
  return number.toString().length === 1 ? "0" + number : number;
}

export default function CaughtDate({ caughtDate }) {
  const day = formatDateTimeNumber(caughtDate.getDate());
  const month = formatDateTimeNumber(+caughtDate.getMonth() + 1);
  const year = caughtDate.getFullYear();
  const hours = formatDateTimeNumber(caughtDate.getHours());
  const minutes = formatDateTimeNumber(caughtDate.getMinutes());
  const seconds = formatDateTimeNumber(caughtDate.getSeconds());

  return (
    <p className="m-0">
      {day}.{month}.{year} {hours}:{minutes}:{seconds}
    </p>
  );
}
