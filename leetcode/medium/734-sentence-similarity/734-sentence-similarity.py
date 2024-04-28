from typing import List


class Solution:
    def areSentencesSimilar(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):
            return False

        similar = set()

        for pair in similarPairs:
            similar.add(tuple(pair))
            similar.add((pair[1], pair[0]))

        for word1, word2 in zip(sentence1, sentence2):
            if word1 != word2 and (word1, word2) not in similar:
                return False

        return True
