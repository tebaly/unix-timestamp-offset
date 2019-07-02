export default function (offset) {

  return Math.round(new Date().getTime() / 1000) + Number(offset);
}
