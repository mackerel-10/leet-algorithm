/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = {};
  let mapSize = ransomNote.length;
  

  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]]) {
      map[ransomNote[i]]++;
    } else {
      map[ransomNote[i]] = 1;
    }
  }
  // console.log(map, mapSize);

  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] > 0) {
      map[magazine[i]]--;
      mapSize--;
    }
  }

  // console.log(mapSize);
  if (mapSize > 0) {
    return false;
  }
  return true;
};