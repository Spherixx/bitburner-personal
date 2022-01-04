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
    var virusCount = 0;
    if (ns.fileExists("BruteSSH.exe", "home") == true) {
        virusCount++;
    }
    if (ns.fileExists("FTPCrack.exe", "home") == true) {
        virusCount++;
    }
    if (ns.fileExists("relaySMTP.exe", "home") == true) {
        virusCount++;
    }
    if (ns.fileExists("HTTPWorm.exe", "home") == true) {
        virusCount++;
    }
    if (ns.fileExists("SQLInject.exe", "home") == true) {
        virusCount++;
    }
    for (var i = 0; i < servers.length; i++) {
        if (ns.hasRootAccess == false) {
            if (ns.getServerNumPortsRequired(servers[i]) == 0) {
                ns.tprint(`Nuking ${servers[i]}`);
                ns.nuke(servers[i]);
            } else if (ns.getServerNumPortsRequired(servers[i]) == 1 && virusCount >= 1) {
                ns.tprint(`Running 1 virus and Nuking ${servers[i]}`);
                ns.brutessh(servers[i]);
                ns.nuke(servers[i]);
            } else if (ns.getServerNumPortsRequired(servers[i]) == 2 && virusCount >= 2) {
                ns.tprint(`Running 2 virus' and Nuking ${servers[i]}`);
                ns.brutessh(servers[i]);
                ns.ftpcrack(servers[i]);
                ns.nuke(servers[i]);
            } else if (ns.getServerNumPortsRequired(servers[i]) == 3 && virusCount >= 3) {
                ns.tprint(`Running 3 virus' and Nuking ${servers[i]}`);
                ns.brutessh(servers[i]);
                ns.ftpcrack(servers[i]);
                ns.relaysmtp(servers[i]);
                ns.nuke(servers[i]);
            } else if (ns.getServerNumPortsRequired(servers[i]) == 4 && virusCount >= 4) {
                ns.tprint(`Running 4 virus' and Nuking ${servers[i]}`);
                ns.brutessh(servers[i]);
                ns.ftpcrack(servers[i]);
                ns.relaysmtp(servers[i]);
                ns.httpworm(servers[i]);
                ns.nuke(servers[i]);
            } else if (ns.getServerNumPortsRequired(servers[i]) == 5 && virusCount == 5) {
                ns.tprint(`Running 4 virus' and Nuking ${servers[i]}`);
                ns.brutessh(servers[i]);
                ns.ftpcrack(servers[i]);
                ns.relaysmtp(servers[i]);
                ns.httpworm(servers[i]);
                ns.sqlinject(servers[i]);
                ns.nuke(servers[i]);
            }
        }
    }
}