/** @param {NS} ns **/
export async function main(ns) {

    ns.tprint(calculateGrowth(100, 7, ns.getServerSecurityLevel('iron-gym'), ns.getServerGrowth('iron-gym'), 1));

}

export function calculateGrowth(threads, cores, security, growth, bitnodeMulti) {

    const numServerGrowthCycles = Math.max(Math.floor(threads), 0);
  
    //Get adjusted growth rate, which accounts for server security
    const growthRate = 1.03;
    const maxGrowthRate = 1.0035;
    let adjGrowthRate = 1 + (growthRate - 1) / security;
    if (adjGrowthRate > maxGrowthRate) {
      adjGrowthRate = maxGrowthRate;
    }
  
    //Calculate adjusted server growth rate based on parameters
    const serverGrowthPercentage = growth / 100;
    const numServerGrowthCyclesAdjusted = numServerGrowthCycles * serverGrowthPercentage * bitnodeMulti;
  
    //Apply serverGrowth for the calculated number of growth cycles
    const coreBonus = 1 + (cores - 1) / 16;
    return Math.pow(adjGrowthRate, numServerGrowthCyclesAdjusted * 1 * coreBonus);

}