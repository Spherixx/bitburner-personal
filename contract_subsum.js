/** @param {NS} ns **/
export async function main(ns) {
	var a = [-3,-1,1,5,-7,-1,-3,-4,-1,6,-8,10,-4,4,-4];

	ns.tprint("Answer " + maxSubarraySum(a, a.length));

}

function maxSubarraySum(arr, size) {
    var max_ending_here = 0, max_so_far = Number.MIN_VALUE;

    for (let i = 0; i < size; i++) {
 
        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= max_ending_here + arr[i]) {
            max_ending_here += arr[i];
		
		// Else start the max subarray from current element
        } else {
                max_ending_here = arr[i];
        }
            if (max_ending_here > max_so_far) {
                max_so_far = max_ending_here;
            }
        }
        return max_so_far;
    }

