const normalizeName = name => {
  const words = name.split('-');
  const titleCasedWords = words.map(word => {
    if (word !== 'as' && word !== 'on') {
      word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    }
    return word;
  })
  return titleCasedWords.join(' ');
}

export default normalizeName;
