const text = '2018-03-14';

const re = /(\d+)-(\d+)-(\d+)/;

console.log(re.exec(text));
//["2018-03-14", "2018", "03", "14"]
