/** @param {NS} ns **/
export async function main(ns) {
    const args = ns.flags([['help', false]]);
    const hostname = args._[0];
    if(args.help || !hostname) {
        ns.tprint("This script will generate money by hacking a target server.");
        ns.tprint(`USAGE: run ${ns.getScriptName()} SERVER_NAME`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()} n00dles`);
        return;
    }
    while (true) {
        if ((ns.hackAnalyzeChance(hostname) * 100).toFixed(2) > 75 
        && ns.getServerMoneyAvailable(hostname) > ns.getServerMaxMoney(hostname) * 0.75 
        || ns.getServerSecurityLevel(hostname) < ns.getServerMinSecurityLevel(hostname) + 5 
        && ns.getServerMoneyAvailable(hostname) > ns.getServerMaxMoney(hostname) * 0.75) {
            await ns.hack(hostname);
        } else if (ns.getServerMoneyAvailable(hostname) < ns.getServerMaxMoney(hostname) * 0.75) {
            await ns.grow(hostname);
        } else {
            await ns.weaken(hostname);
        }
    }
}