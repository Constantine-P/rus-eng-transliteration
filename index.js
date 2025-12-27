const rusToEngMap = {
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',
  'Й': 'Y',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'X',
  'Ц': 'C',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Shh',
  'Ъ': 'J',
  'Ы': 'Wi',
  'Ь': 'Q',
  'Э': 'We',
  'Ю': 'Yu',
  'Я': 'Ya',

  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'x',
  'ц': 'c',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shh',
  'ъ': 'j',
  'ы': 'wi',
  'ь': 'q',
  'э': 'we',
  'ю': 'yu',
  'я': 'ya',
};

export function convert(str, options = {}) {
  let output = Array.prototype.map.call(str, (character) => rusToEngMap[character] ?? character).join('');
  if (options.slugify) {
    output = slugify(output);
  } else {
    output = unSlugify(output);
  }
  if (options.lowerCase) {
    output = output.toLowerCase();
  }
  return output;
}

export function reverse(str, options = {}) {
  let output = str;
  Object.entries(rusToEngMap).sort(([, a], [, b]) => b.length - a.length).forEach(([key, value]) => {
    output = output.replaceAll(value, key);
  });
  if (options.slugify) {
    output = slugify(output);
  } else {
    output = unSlugify(output);
  }
  if (options.lowerCase) {
    output = output.toLowerCase();
  }
  return output;
}

function slugify(str) {
  return str.replaceAll(/\s|-/g, (substring) => {
    if (substring === ' ') {
      return '-';
    }
    if (substring === '-') {
      return '--';
    }
  });
}

function unSlugify(str) {
  return str.replaceAll(/(--)|-/g, (substring) => {
    if (substring === '-') {
      return ' ';
    }
    if (substring === '--') {
      return '-';
    }
  });
}
