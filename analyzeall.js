/** @param {NS} ns **/
export async function main(ns) {
    const servers = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", 
        "harakiri-sushi", "neo-net", "zer0", "max-hardware", "iron-gym", "CSEC", "silver-helix", 
        "crush-fitness", "phantasy", "omega-net", "the-hub", "johnson-ortho", "avmnite-02h", "netlink", 
        "rothman-uni", "summit-uni", "catalyst", "comptek", "I.I.I.I", "millenium-fitness", "rho-construction", 
        "syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm", "unitalife", 
        "univ-energy", "zb-def", "nova-med", "zb-institute", "galactic-cyber", "omnia", "icarus", "deltaone", 
        "solaris", "aerocorp", "defcomm", "zeus-med"];

    for (var i = 0; i < servers.length; i++) {
        const ram = [ns.getServerMaxRam(servers[i]), ns.getServerUsedRam(servers[i])];
        const money = ns.getServerMoneyAvailable(servers[i]);
        const maxMoney = ns.getServerMaxMoney(servers[i]);
        const minSec = ns.getServerMinSecurityLevel(servers[i]);
        const sec = ns.getServerSecurityLevel(servers[i]);
        var canHack = false;
        var hasMoney = false;
        if (ns.getServerRequiredHackingLevel(servers[i]) <= ns.getHackingLevel() && ns.getServerMaxMoney(servers[i]) > 0) {
            canHack = true;
            ns.tprint(`
            ${servers[i]}:
                RAM         : ${ram[1]} / ${ram[0]} (${ram[1] / ram[0] * 100}%)
                $           : ${ns.nFormat(money, "$0.000a")} / ${ns.nFormat(maxMoney, "$0.000a")} (${(money / maxMoney * 100).toFixed(2)}%)
                level req   : ${ns.getServerRequiredHackingLevel(servers[i])}
                hackable    : ${canHack}
                security    : ${minSec.toFixed(2)} / ${sec.toFixed(2)}
                growth      : ${ns.getServerGrowth(servers[i])}
                hack time   : ${ns.tFormat(ns.getHackTime(servers[i]))}
                grow time   : ${ns.tFormat(ns.getGrowTime(servers[i]))}
                weaken time : ${ns.tFormat(ns.getWeakenTime(servers[i]))}
                grow x2     : ${(ns.growthAnalyze(servers[i], 2)).toFixed(2)} threads
                grow x3     : ${(ns.growthAnalyze(servers[i], 3)).toFixed(2)} threads
                grow x4     : ${(ns.growthAnalyze(servers[i], 4)).toFixed(2)} threads
                hack 10%    : ${(.10 / ns.hackAnalyze(servers[i])).toFixed(2)} threads
                hack 25%    : ${(.25 / ns.hackAnalyze(servers[i])).toFixed(2)} threads
                hack 50%    : ${(.50 / ns.hackAnalyze(servers[i])).toFixed(2)} threads
                hack 75%    : ${(.75 / ns.hackAnalyze(servers[i])).toFixed(2)} threads
                hack 100%   : ${(1 / ns.hackAnalyze(servers[i])).toFixed(2)} threads
                hackChance  : ${(ns.hackAnalyzeChance(servers[i]) * 100).toFixed(2)}%`);
        }
        if (ns.getServerMaxMoney(servers[i]) > 0) {
            hasMoney = true
        }

    }
}