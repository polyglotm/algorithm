// 3074-apple-redistribution-into-boxes
// URL: https://leetcode.com/problems/apple-redistribution-into-boxes/description/


function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a, b) => a - b);
  
    let count = 0;
    let containerSize = 0;
    let appleCount = apple.reduce((acc, cur) => acc + cur, 0);
  
    while (appleCount > containerSize) {
      containerSize += capacity.pop();
      count++;
    }
  
    return count;
  }