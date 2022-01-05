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
    var customServerCount = 0;
    const currentScript = "basic0.js";
    var currentTarget = "none";
    var usingCustomServers = false;
    var usingHost = true;
    var stopScripts = true;
    var nukeAll = true;
    var threads = 0;
    var statistics = true;
    var totalRAM = 0;
    var usedRAM = 0;
    var totalThreads = 0;

    // checking if gettarget.js exists and running it
    if (ns.fileExists("gettarget.js", "home") == true) {
        ns.tprint("Running gettarget.js");
        ns.exec('gettarget.js', ns.getHostname());
        await ns.sleep(500);
        // reat the target file
        try {
            currentTarget = JSON.parse(ns.read('target.txt'));
            ns.tprint(`Target returned: ${currentTarget}`);
            await ns.sleep(500);
        } catch (err) {
            ns.tprint(err);
        }
    } else {
        ns.tprint("Failed to find gettartet.js");
    }
    // looking for nuke.js and running it if exists and nukeAll is true
    if (nukeAll == true && ns.fileExists("nukeall.js", "home") == true) {
        ns.tprint("Running nukeall.js");
        ns.exec("nukeall.js", ns.getHostname());
        // wait for nukeall.js to finish running
        while (ns.scriptRunning('nukeall.js', ns.getHostname()) == true) {
            await ns.sleep(200);
        }
        ns.tprint("Finished running nukeall.js");
    } else if (nukeAll == true && ns.fileExists("nukeall.js", "home") == false) {
        ns.tprint("Failed to find nukeall.js")
    }
    // determine if we have custom servers
    if (customServers.length > 0) {
        customServerCount = customServers.length;
        usingCustomServers = true;
        await ns.sleep(200);
        ns.tprint(`Found ${customServerCount} custom server(s)`);
    } else {
        await ns.sleep(200);
        ns.tprint("Failed to find any custom servers");
        usingCustomServers = false;
    }
    // check if stopScripts is true, run killall if it is
    if (stopScripts == true) {
        ns.tprint("Killing scripts");
        ns.exec('killall.js', ns.getHostname());
        while (ns.scriptRunning('killall.js', ns.getHostname()) == true) {
            await ns.sleep(200);
        }
        ns.tprint("Finished killing scripts");
    }

    // max money, current money, current money percentage
    const targetMoney = [ns.getServerMaxMoney(currentTarget), ns.getServerMoneyAvailable(currentTarget), 
        ns.getServerMoneyAvailable(currentTarget) / ns.getServerMaxMoney(currentTarget) * 100];
    // current security level, minimum security level
    const targetSecurity = [ns.getServerSecurityLevel(currentTarget), ns.getServerMinSecurityLevel(currentTarget)];
    // target hack chance
    const targetChance = (ns.hackAnalyzeChance(currentTarget) * 100).toFixed(2);
    // target 100% hack thread count
    const targetHackThreads = (1 / ns.hackAnalyze(currentTarget)).toFixed(2);
    // hack time
    const targetHackTime = ns.getHackTime(currentTarget);
    // grow time
    const targetGrowTime = ns.getGrowTime(currentTarget);
    // weaken time
    const targetWeakenTime = ns.getWeakenTime(currentTarget);
    // RAM info
    const targetRAM = [ns.getServerMaxRam(currentTarget), ns.getServerUsedRam(currentTarget)];
    

    // handle server list
    ns.tprint(`Launching normal servers...`);
    for (var i = 0; i < servers.length; i++) {
        if (ns.getServerMaxRam(servers[i]) > ns.getScriptRam(currentScript) && ns.hasRootAccess(servers[i]) == true) {
            threads = Math.floor((ns.getServerMaxRam(servers[i]) - ns.getServerUsedRam(servers[i])) / ns.getScriptRam(currentScript));
            await deploy(currentScript, servers[i], threads, currentTarget);
        } else if (ns.getServerMaxRam(servers[i]) == 0) {
            ns.tprint(`${servers[i]}: Has no RAM, skipping`);
        } else if (ns.hasRootAccess(servers[i]) == false) {
            ns.tprint(`${servers[i]}: No Root access, skipping`);
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
        await ns.sleep(1000);
    }
    // handle home
    if (usingHost == true) {
        ns.tprint(`Launching home server...`);
        threads = Math.floor((ns.getServerMaxRam(ns.getHostname()) - ns.getServerUsedRam(ns.getHostname())) / ns.getScriptRam(currentScript)) - 10;
        await deploy(currentScript, ns.getHostname(), threads, currentTarget);
        await ns.sleep(1000);
    }
    if (statistics == true) {
        ns.tprint(`
        ${currentTarget}:
            RAM           : ${targetRAM[1]} / ${targetRAM[0]} (${targetRAM[1] / targetRAM[0] * 100}%)
            Money         : ${ns.nFormat(targetMoney[1], "$0.000a")} / ${ns.nFormat(targetMoney[0], "$0.000a")} (${targetMoney[2]}%)
            Security      : ${targetSecurity[1].toFixed()} / ${targetSecurity[0].toFixed()}
            Growth        : ${ns.getServerGrowth(currentTarget)}
            Hack time     : ${ns.tFormat(ns.getHackTime(currentTarget))}
            Grow time     : ${ns.tFormat(ns.getGrowTime(currentTarget))}
            Weaken time   : ${ns.tFormat(ns.getWeakenTime(currentTarget))}
            Grow x10      : ${(ns.growthAnalyze(currentTarget, 10)).toFixed()}  threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Grow x50      : ${(ns.growthAnalyze(currentTarget, 50)).toFixed()}  threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Grow x100     : ${(ns.growthAnalyze(currentTarget, 100)).toFixed()} threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Hack 25%      : ${(.25 / ns.hackAnalyze(currentTarget)).toFixed()}  threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Hack 50%      : ${(.50 / ns.hackAnalyze(currentTarget)).toFixed()}  threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Hack 75%      : ${(.75 / ns.hackAnalyze(currentTarget)).toFixed()}  threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Hack 100%     : ${(1 / ns.hackAnalyze(currentTarget)).toFixed()}    threads ${(ns.growthAnalyze(currentTarget, 10)).toFixed() * (ns.getScriptRam(currentScript)).toFixed()} GB RAM
            Hack Chance   : ${(ns.hackAnalyzeChance(currentTarget) * 100).toFixed(2)}%
        TOTALS:
            RAM Total     : ${totalRAM} GB
            RAM Used      : ${usedRAM.toFixed()} GB
            Thread Count  : ${totalThreads} threads
        `);
    }
    async function deploy(script, server, threads, target) {
        totalRAM += ns.getServerMaxRam(server);
        usedRAM += threads * ns.getScriptRam(script);
        totalThreads += threads;
        ns.tprint(`${server}: Launching ${script} with ${threads} threads, targeting: ${target}`);
        await ns.scp(script, ns.getHostname(), server);
        ns.exec(script, server, threads, target);
        await ns.sleep(50);
    }
}
