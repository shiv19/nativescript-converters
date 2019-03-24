import { getResources } from 'tns-core-modules/application';

const difficultyMap = {
  '1': 'Beginner',
  '2': 'Intermediate',
  '3': 'Advanced'
}

getResources().imageUrlConverter = (value) => {
  if (!value) return '';

  return `https://example.com/${value}`;
}

getResources().imageUrlConverterWithType = (value, type) => {
  if (!value) return '';

  return `https://example.com/${value}.${type}`;
}

getResources().dateConverter = {
  toView(value, format) {
      let result = format;
      const day = value.getDate();
      result = result.replace("DD", day < 10 ? `0${day}` : day);
      const month = value.getMonth() + 1;
      result = result.replace("MM", month < 10 ? `0${month}` : month);
      result = result.replace("YYYY", value.getFullYear());

      return result;
  },
  toModel(value, format) {
      const ddIndex = format.indexOf("DD");
      const day = parseInt(value.substr(ddIndex, 2), 10);
      const mmIndex = format.indexOf("MM");
      const month = parseInt(value.substr(mmIndex, 2), 10);
      const yyyyIndex = format.indexOf("YYYY");
      const year = parseInt(value.substr(yyyyIndex, 4), 10);
      const result = new Date(year, month - 1, day);

      return result;
  }
}

getResources().toUppercase = (value) => {
  if (!value) return;

  return value.toUpperCase();
}

getResources().courseDifficulty = (value) => {
  if (!value) return;

  return difficultyMap[value];
}

getResources().imageUrl = (value) => {
  if (!value) return;

  return `~/imgs/${value}`;
}

