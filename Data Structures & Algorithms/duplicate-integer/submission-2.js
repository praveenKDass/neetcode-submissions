class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map =[...new Set(nums)]
        
        if(nums.length === map.length){
            return false
        }

        return true
    }
}
