class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
        let left=0;
        for(let right=0;right<prices.length;right++){
            while(prices[left]>prices[right]){
                 left++
            }          
         maxProfit=Math.max(prices[right]-prices[left],maxProfit)
            
        }
        return maxProfit
    }
}
