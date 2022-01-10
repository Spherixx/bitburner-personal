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
    var targets = [];
    var targetsMoney = [];
    var targetsCounter = 0;
    var targetMoney = 0;
    for (var i = 0; i < servers.length; i++) {
        //ns.tprint(`Checking ${servers[i]}`);
        if (ns.getServerRequiredHackingLevel(servers[i]) <= ns.getHackingLevel() && ns.getServerMaxMoney(servers[i]) > 1000) {
            //ns.tprint(`${servers[i]} OK`);
            targets[targetsCounter] = servers[i];
            targetsMoney[targetsCounter] = ns.getServerMaxMoney(targets[targetsCounter])
            targetsCounter++;
        }      
    }
    targetMoney = (Math.max(...targetsMoney));
    for (var j = 0; j < targets.length; j++) {
        if (ns.getServerMaxMoney(targets[j]) == targetMoney) {
            //ns.tprint("Target set to " + targets[j]);
            ns.write('target.txt', JSON.stringify(targets[j]), 'w');
            break;
        }
    }
    //ns.tprint(Math.max(...targetsMoney));
}