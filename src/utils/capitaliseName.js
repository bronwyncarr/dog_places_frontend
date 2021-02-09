// Captialise Name for consistency
function capitaliseName(string) {
  const words = string.toLowerCase().split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return formattedWords.join(" ");
}

export default capitaliseName;
