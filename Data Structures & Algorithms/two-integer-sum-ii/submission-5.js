class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
           let i=0
           let j= numbers.length-1
        while(i<j){        
            let remaining=numbers[i]+numbers[j]
            if(target === remaining){
                return [i+1,j+1]
            }           
           if(target < remaining){
               j--
           }else{
               i++
           }
                          
        }
    }
}
