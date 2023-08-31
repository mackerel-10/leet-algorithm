/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  /* let map = {};
  let mapSize = ransomNote.length;
  

  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]]) {
      map[ransomNote[i]]++;
    } else {
      map[ransomNote[i]] = 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] > 0) {
      map[magazine[i]]--;
      mapSize--;
    }
  }

  if (mapSize > 0) {
    return false;
  }
  return true; */

  let map = new Map();

  for (const char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};