class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //
        //First value and check with other value if they givestarget return the both index

        let map = new Map();

        for(let i=0;i<nums.length;i++){
            let value= target-nums[i]
              if(map.has(value)){
                return [i,map.get(value)]
            }
            map.set(nums[i],i)
        }   

           
    }
}
