// 734-sentence-similarity
// URL: https://leetcode.com/problems/sentence-similarity/description/?envType=study-plan-v2&envId=premium-algo-100

function areSentencesSimilar(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
    if (sentence1.length !== sentence2.length) {
      return false;
    }
  
    const similarMap = new Map<string, Set<string>>();
    for (const pair of similarPairs) {
      if (!similarMap.has(pair[0])) {
        similarMap.set(pair[0], new Set());
      }
      similarMap.get(pair[0]).add(pair[1]);
    }
  
    for (let i = 0; i < sentence1.length; i++) {
      if (sentence1[i] === sentence2[i]) {
        continue;
      }
  
      const isSentence1SimilarWord = similarMap.get(sentence1[i])?.has(sentence2[i]);
      const isSentence2SimilarWord = similarMap.get(sentence2[i])?.has(sentence1[i]);
  
      if (!isSentence1SimilarWord && !isSentence2SimilarWord) {
        return false;
      }
    }
  
    return true;
  };
  