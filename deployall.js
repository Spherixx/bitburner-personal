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
    const customServers = ns.getPurchasedServers();
    const currentScript = "basic0.js";
    var currentTarget = "none";
    ns.exec('findtarget.js', ns.getHostname());
    await ns.sleep(1000);
    try {
        currentTarget = JSON.parse(ns.read('target.txt'));
    } catch (err) {
        ns.tprint(err);
    }
    ns.exec("nuke.js", ns.getHostname());
    await ns.sleep(1000);
    var usingCustomServers = true;
    if (ns.getPurchasedServers.length > 0) {
        usingCustomServers = true;
    }
    var usingHost = true;
    var stopScripts = true;
    var threads = 0;

    // handle server list
    ns.tprint(`Launching normal servers...`);
    for (var i = 0; i < servers.length; i++) {
        if (stopScripts == true) {
            ns.killall(servers[i]);
            if (ns.getServerMaxRam(servers[i]) > ns.getScriptRam(currentScript)) {
                threads = Math.floor((ns.getServerMaxRam(servers[i]) - ns.getServerUsedRam(servers[i])) / ns.getScriptRam(currentScript));
                await deploy(currentScript, servers[i], threads, currentTarget);
            }
        } else {
            if (ns.getServerMaxRam(servers[i]) > ns.getScriptRam(currentScript)) {
                threads = Math.floor((ns.getServerMaxRam(servers[i]) - ns.getServerUsedRam(servers[i])) / ns.getScriptRam(currentScript));
                await deploy(currentScript, servers[i], threads, currentTarget);
            }
        }

    }
    await ns.sleep(1000);
    // handle custom servers
    if (usingCustomServers == true) {
        ns.tprint(`Launching custom servers...`);
        for (var j = 0; j < customServers.length; j++) {
            if (stopScripts == true) {
                ns.killall(customServers[j]);
                threads = Math.floor((ns.getServerMaxRam(customServers[j]) - ns.getServerUsedRam(customServers[j])) / ns.getScriptRam(currentScript));
                await deploy(currentScript, customServers[j], threads, currentTarget);
            } else {
                threads = Math.floor((ns.getServerMaxRam(customServers[j]) - ns.getServerUsedRam(customServers[j])) / ns.getScriptRam(currentScript));
                await deploy(currentScript, customServers[j], threads, currentTarget);
            }
        }
    }
    await ns.sleep(1000);
    // handle home
    if (usingHost == true) {
        ns.tprint(`Launching home...`);
            threads = Math.floor((ns.getServerMaxRam(ns.getHostname()) - ns.getServerUsedRam(ns.getHostname())) / ns.getScriptRam(currentScript)) - 10;
            await deploy(currentScript, ns.getHostname(), threads, currentTarget);
    }
    await ns.sleep(1000);

    async function deploy(script, server, threads, target) {
        if (ns.getServerMaxRam(server) > 0) {
            ns.tprint(`Launching script '${script}' on server '${server}' with ${threads} threads and targeting: ${target}`);
            await ns.scp(script, ns.getHostname(), server);
            ns.exec(script, server, threads, target);
            await ns.sleep(50);
        } else {
            ns.tprint(`Skipping ${server} because it has no RAM`);
        }
    }
}