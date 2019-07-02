export default function (offset) {

  return Math.round(Date.now() / 1000) + Number(offset);
}
