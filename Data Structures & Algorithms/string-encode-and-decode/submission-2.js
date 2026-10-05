class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // let encoded_string = strs.join("#")
        let result = "";

    for (const str of strs) {
        result += str.length + "#" + str;
    }

    return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
     const result = [];
       let i = 0;

    while (i < str.length) {
        // Find the separator
        let j = i;

        while (str[j] !== "#") {
            j++;
        }

        // Extract length
        const length = Number(str.substring(i, j));

        // Extract the actual string
        const strs = str.substring(j + 1, j + 1 + length);
        result.push(strs);

        // Move to the next encoded string
        i = j + 1 + length;
    }

    return result;

    }
}
