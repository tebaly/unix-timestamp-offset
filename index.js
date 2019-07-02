export default function (offset) {
  let seconds = offset || 0;
  return Math.round(Date.now() / 1000) + Number(seconds);
}
