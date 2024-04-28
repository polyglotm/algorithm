class Solution {
    fun areSentencesSimilar(sentence1: Array<String>, sentence2: Array<String>, similarPairs: List<List<String>>): Boolean {
        if (sentence1.size != sentence2.size) {
            return false
        }

        val similar = mutableSetOf<Pair<String, String>>()

        for (pair in similarPairs) {
            similar.add(Pair(pair[0], pair[1]))
            similar.add(Pair(pair[1], pair[0]))
        }

        for ((word1, word2) in sentence1.zip(sentence2)) {
            if (word1 != word2 && !similar.contains(Pair(word1, word2))) {
                return false
            }
        }

        return true
    }
}
