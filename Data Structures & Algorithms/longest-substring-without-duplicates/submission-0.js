class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        //first char substring when there is an duplicate will break
        //and goes to next string substring
        //if length greater than oldsubstring will replace with new substring

        let left=0; 
        let maxlength=0 
        let set= new Set()

        for(let right =0;right<s.length; right++){

          while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
          }

            set.add(s[right])    
            let  currenLength =right-left +1;

            // if(currenLength>maxlength){
            //     maxlength= currenLength
            // }
            maxlength = Math.max(currenLength,maxlength );

        }

      return maxlength


    }
}
