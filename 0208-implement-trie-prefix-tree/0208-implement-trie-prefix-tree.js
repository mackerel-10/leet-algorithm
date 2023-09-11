
var Trie = function() {
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;

  for (const c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;

  for (const c of word) {
    node = node[c];
    if (!node) return false;
  }

  if (node.isEndOfWord) return true;
  else return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for (const c of prefix) {
    node = node[c];
    if (!node) return false;
  }

  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */