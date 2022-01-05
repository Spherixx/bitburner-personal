/** @param {NS} ns **/
export async function main(ns) {
    const servers = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi",
        "neo-net", "zer0", "max-hardware", "iron-gym", "CSEC", "silver-helix", "crush-fitness", "phantasy", "omega-net", "the-hub",
        "johnson-ortho", "avmnite-02h", "netlink", "rothman-uni", "summit-uni", "catalyst", "comptek", "I.I.I.I",
        "millenium-fitness", "rho-construction", "syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm",
        "unitalife", "univ-energy", "zb-def", "nova-med", "applied-energetics", "zb-institute", "vitalife", "titan-labs",
        "solaris", "microdyne", "helios", "deltaone", "icarus", "zeus-med", "omnia", "defcomm", "galactic-cyber", "infocomm",
        "taiyang-digital", "stormtech", "aerocorp", "clarkinc", "omnitek", "nwo", "4sigma", "blade", "b-and-a", "ecorp",
        "fulcrumtech", "megacorp", "kuai-gong", "fulcrumassets", "powerhouse-fitness", ".", "run4theh111z"];

    for (var i = 0; i < servers.length; i++) {
        // max money, current money, current money percentage
        const targetMoney = [ns.getServerMaxMoney(servers[i]), ns.getServerMoneyAvailable(servers[i]), 
        ns.getServerMoneyAvailable(servers[i]) / ns.getServerMaxMoney(servers[i]) * 100];
        // current security level, minimum security level
        const targetSecurity = [ns.getServerSecurityLevel(servers[i]), ns.getServerMinSecurityLevel(servers[i])];
        var canHack = false;
        if (ns.getServerRequiredHackingLevel(servers[i]) <= ns.getHackingLevel() && ns.getServerMaxMoney(servers[i]) > 100000000000) {
            canHack = true;
            ns.tprint(`
    ${servers[i]}:
            Money         : ${ns.nFormat(targetMoney[1], "$0.000a")} / ${ns.nFormat(targetMoney[0], "$0.000a")} (${targetMoney[2].toFixed(2)}%)
            Security      : ${targetSecurity[1].toFixed()} / ${targetSecurity[0].toFixed()}
            Growth        : ${ns.getServerGrowth(servers[i])}
            Hack time     : ${ns.tFormat(ns.getHackTime(servers[i]))}
            Grow time     : ${ns.tFormat(ns.getGrowTime(servers[i]))}
            Weaken time   : ${ns.tFormat(ns.getWeakenTime(servers[i]))}
            Grow x10      : ${(ns.growthAnalyze(servers[i], 10)).toFixed()} threads     ${(ns.growthAnalyze(servers[i], 10)).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Grow x50      : ${(ns.growthAnalyze(servers[i], 50)).toFixed()} threads     ${(ns.growthAnalyze(servers[i], 50)).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Grow x100     : ${(ns.growthAnalyze(servers[i], 100)).toFixed()} threads    ${(ns.growthAnalyze(servers[i], 100)).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Hack 25%      : ${(.25 / ns.hackAnalyze(servers[i])).toFixed()} threads     ${(.25 / ns.hackAnalyze(servers[i])).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Hack 50%      : ${(.50 / ns.hackAnalyze(servers[i])).toFixed()} threads     ${(.50 / ns.hackAnalyze(servers[i])).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Hack 75%      : ${(.75 / ns.hackAnalyze(servers[i])).toFixed()} threads     ${(.75 / ns.hackAnalyze(servers[i])).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Hack 100%     : ${(1 / ns.hackAnalyze(servers[i])).toFixed()} threads       ${(1 / ns.hackAnalyze(servers[i])).toFixed() * (ns.getScriptRam('basic0.js')).toFixed()} GB
            Hack Chance   : ${(ns.hackAnalyzeChance(servers[i]) * 100).toFixed(2)}% 
            `);

        }
    }
}