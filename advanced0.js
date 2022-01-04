/** @param {NS} ns **/
export async function main(ns) {
    // server parameters
    const target = "harakiri-sushi"
    // max ram, used ram, remaining ram, used ram percentage
    const targetRAM = [ns.getServerMaxRam(target), ns.getServerUsedRam(target), ns.getServerMaxRam(target) - ns.getServerUsedRam(target), 
        ns.getServerUsedRam(target) / ns.getServerMaxRam(target) * 100];
    // max money, current money, current money percentage
    const targetMoney = [ns.getServerMaxMoney(target), ns.getServerMoneyAvailable(target), ns.getServerMoneyAvailable(target) / ns.getServerMaxMoney(target) * 100];
    // current security level, minimum security level
    const targetSecurity = [ns.getServerSecurityLevel(target), ns.getServerMinSecurityLevel(target)];
    // target hack chance
    const targetChance = (ns.hackAnalyzeChance(target) * 100).toFixed(2);

    ns.tprint(targetRAM);
    ns.tprint(targetMoney);
    ns.tprint(targetSecurity);
    ns.tprint(targetChance);

}