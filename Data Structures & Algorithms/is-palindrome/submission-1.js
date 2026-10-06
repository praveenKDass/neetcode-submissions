class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          s=s.toLowerCase().replace(/[^A-za-z0-9]/g,"")
           
        for(let i=0, right=s.length-1 ; i<s.length/2;i++,right--){
                if(s[i] !== s[right]){
                    return false
                }
        }
        return true
    }
}
