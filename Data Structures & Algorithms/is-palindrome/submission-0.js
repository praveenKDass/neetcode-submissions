class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          s=s.toLowerCase().replace(/[^A-za-z0-9]/g,"")
          let right=s.length-1
        for(let i=0 ; i<s.length/2;i++){
                if(s[i] !== s[right]){
                    return false
                }
               right--      
        }
        return true
    }
}
