export default function (offset) {
  var seconds = offset || 0;
  return Math.round(Date.now() / 1000) + Number(seconds);
}
