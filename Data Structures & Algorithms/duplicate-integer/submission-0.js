class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map =[...new Set(nums)]
        // for(let i=0; i< nums.length;i++){
        //   map.push(nums[i])  
        // }
        
        if(nums.length === map.length){
            return false
        }

        return true
    }
}
