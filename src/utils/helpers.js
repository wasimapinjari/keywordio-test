export function capitalizeFirstLetter(text) {
  const words = text.split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedText = capitalizedWords.join(' ');
  return capitalizedText;
}

export function addCommas(number) {
  let numStr = number.toString();
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numStr;
}

export function sum(number) {
  let numStr = number.toString();
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numStr;
}

export function sumColumn(data, key) {
  const sum = data.reduce((acc, dataPoint) => {
    return Number(dataPoint[key]) + acc;
  }, 0);
  return sum;
}

export function createData(data, key) {
  const color = { Male: '#FF833C', Female: '#0096FF', Unknown: '#333C47' };
  const preparedData = data.map((dataPoint) => {
    return {
      value: Number(dataPoint[key]),
      label: dataPoint['group'],
      color: color[dataPoint['group']],
    };
  });
  return preparedData;
}
