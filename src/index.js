module.exports = function reverse (n) {
    if (n >= 0) {
    let str = String(n);
    let mass = str.split('');
    let mass1 = mass.reverse();
    let str1 = mass1.join('');
    let num = Number(str1);
  return num;
    }
    if (n < 0) {
        let str = String(-n);
        let mass = str.split('');
        let mass1 = mass.reverse();
        let str1 = mass1.join('');
        let num = Number(str1);
  return num;
    }
}
