/** @param {NS} ns **/
export async function main(ns) {
    const servers = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi",
        "neo-net", "zer0", "max-hardware", "iron-gym", "CSEC", "silver-helix", "crush-fitness", "phantasy", "omega-net", "the-hub",
        "johnson-ortho", "avmnite-02h", "netlink", "rothman-uni", "summit-uni", "catalyst", "comptek", "I.I.I.I",
        "millenium-fitness", "rho-construction", "syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm",
        "unitalife", "univ-energy", "zb-def", "nova-med", "applied-energetics", "zb-institute", "vitalife", "titan-labs",
        "solaris", "microdyne", "helios", "deltaone", "icarus", "zeus-med", "omnia", "defcomm", "galactic-cyber", "infocomm",
        "taiyang-digital", "stormtech", "aerocorp", "clarkinc", "omnitek", "nwo", "4sigma", "blade", "b-and-a", "ecorp",
        "fulcrumtech", "megacorp", "kuai-gong", "fulcrumassets", "powerhouse-fitness"];

    const target = "rho-construction";
    // max money, current money, current money percentage
    const targetMoney = [ns.getServerMaxMoney(target), ns.getServerMoneyAvailable(target), ns.getServerMoneyAvailable(target) / ns.getServerMaxMoney(target) * 100];
    // current security level, minimum security level
    const targetSecurity = [ns.getServerSecurityLevel(target), ns.getServerMinSecurityLevel(target)];
    // target hack chance
    const targetChance = (ns.hackAnalyzeChance(target) * 100).toFixed(2);
    // target 100% hack thread count
    const targetHackThreads = (1 / ns.hackAnalyze(target)).toFixed(2);
    // hack time
    const targetHackTime = ns.getHackTime(target);
    // grow time
    const targetGrowTime = ns.getGrowTime(target);
    // weaken time
    const targetWeakenTime = ns.getWeakenTime(target);

    const customServers = ns.getPurchasedServers();
    const currentScript = "basic0.js";
    const usingHome = true;
    const usingCustom = true;
    var availableRAM = 0;
    var availableThreads = 0;

    for (var i = 0; i < servers.length; i++) {
        if (ns.hasRootAccess(servers[i]) == true) {
            availableRAM += ns.getServerMaxRam(servers[i]);
            availableThreads += Math.floor(ns.getServerMaxRam(servers[i]) / ns.getScriptRam(currentScript));
        }
    }
    if (usingHome == true) {
        availableRAM += ns.getServerMaxRam(ns.getHostname());
        availableThreads += Math.floor(ns.getServerMaxRam(ns.getHostname()) / ns.getScriptRam(currentScript));
        }
    if (usingCustom == true) {
        for (var j = 0; j < customServers.length; j++) {
            availableRAM += ns.getServerMaxRam(customServers[j]);
            availableThreads += Math.floor(ns.getServerMaxRam(customServers[j]) / ns.getScriptRam(currentScript));
        }
    }
    ns.tprint(`
        Total RAM:      ${availableRAM}
        Total Threads:  ${availableThreads}
    `);

}