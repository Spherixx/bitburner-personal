/** @param {NS} ns **/
export async function main(ns) {

	const servers0port = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi"];
	const servers1port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    const servers2port = ["silver-helix", "crush-fitness", "phantasy", "omega-net", "the-hub", "johnson-ortho", "avmnite-02h"];
    const servers3port = ["netlink", "rothman-uni", "summit-uni", "catalyst", "comptek", "I.I.I.I", "millenium-fitness", "rho-construction"];
    const servers4port = ["syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "zb-def", "nova-med"];
    const servers5port = ["zb-institute", "galactic-cyber", "omnia", "icarus", "deltaone", "solaris", "aerocorp", "defcomm", "zeus-med"];
    const usingCustomServers = true;
    const usingHost = true;
    const serversCustom = ns.getPurchasedServers();
    const customServerName = "Spherix";
    const customServerAmount = 25;
    const customServerRAM = 16384;
    for (var i = 0; i < customServerAmount; i++) {
        serversCustom[i] = customServerName + i + "-" + customServerRAM + "GB";
    }
    const currentScript = "basic0.js";
    const currentTarget = "the-hub";
    var threadCount = 0;

    // handle 0 port servers
    for (var i = 0; i < servers0port.length; i++) {
        threadCount = Math.floor((ns.getServerMaxRam(servers0port[i]) - ns.getServerUsedRam(servers0port[i])) / ns.getScriptRam(currentScript));
        if (ns.hasRootAccess(servers0port[i]) == true && threadCount > 0) {
            ns.tprint(`Starting ${currentScript} on ${servers0port[i]} with target ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers0port[i]);
            ns.exec(currentScript, servers0port[i], threadCount, currentTarget);
        } else {
            if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel & threadCount > 0) {
                ns.tprint(`Nuking ${servers0port[i]} and starting script`);
                ns.nuke(servers0port[i]);
                await ns.scp(currentScript, ns.getHostname(), servers0port[i]);
                ns.exec(currentScript, servers0port[i], threadCount, currentTarget);
            } else {
                ns.tprint(`Skipping ${servers0port[i]}, hacking level or available thread count too low`);
            }

        }

    }

    if (ns.fileExists("BruteSSH.exe")) {
        // handle 1 port servers
        for (var i = 0; i < servers1port.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(servers1port[i]) - ns.getServerUsedRam(servers1port[i])) / ns.getScriptRam(currentScript));
            if (ns.hasRootAccess(servers1port[i]) == true && threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${servers1port[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), servers1port[i]);
                ns.exec(currentScript, servers1port[i], threadCount, currentTarget);
            } else {
                if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel & threadCount > 0) {
                    ns.tprint(`Opening ports, Nuking ${servers1port[i]} and starting script`);
                    ns.brutessh(servers1port[i]);
                    ns.nuke(servers1port[i]);
                    await ns.scp(currentScript, ns.getHostname(), servers1port[i]);
                    ns.exec(currentScript, servers1port[i], threadCount, currentTarget);
                } else {
                    ns.tprint(`Skipping ${servers1port[i]}, hacking level or available thread count too low`);
                }
            }
        }
    } else {
        ns.tprint("Skipping 1 port servers, BruteSSH not found.")
    }

    if (ns.fileExists("FTPCrack.exe")) {
        // handle 2 port servers
        for (var i = 0; i < servers2port.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(servers2port[i]) - ns.getServerUsedRam(servers2port[i])) / ns.getScriptRam(currentScript));
            if (ns.hasRootAccess(servers2port[i]) == true && threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${servers2port[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), servers2port[i]);
                ns.exec(currentScript, servers2port[i], threadCount, currentTarget);
            } else {
                if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel && threadCount > 0) {
                    ns.tprint(`Opening ports, Nuking ${servers2port[i]} and starting script`);
                    ns.brutessh(servers2port[i]);
                    ns.ftpcrack(servers2port[i]);
                    ns.nuke(servers2port[i]);
                    await ns.scp(currentScript, ns.getHostname(), servers2port[i]);
                    ns.exec(currentScript, servers2port[i], threadCount, currentTarget);
                } else {
                    ns.tprint(`Skipping ${servers2port[i]}, hacking level or available thread count too low`);
                }
            }
        }
    } else {
        ns.tprint("Skipping 2 port servers, FTPCrack not found.")
    }

    if (ns.fileExists("relaySMTP.exe")) {
        // handle 3 port servers
        for (var i = 0; i < servers3port.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(servers3port[i]) - ns.getServerUsedRam(servers3port[i])) / ns.getScriptRam(currentScript));
            if (ns.hasRootAccess(servers3port[i]) == true && threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${servers3port[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), servers3port[i]);
                ns.exec(currentScript, servers3port[i], threadCount, currentTarget);
            } else {
                if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel && threadCount > 0) {
                    ns.tprint(`Opening ports, Nuking ${servers3port[i]} and starting script`);
                    ns.brutessh(servers3port[i]);
                    ns.ftpcrack(servers3port[i]);
                    ns.relaysmtp(servers3port[i]);
                    ns.nuke(servers3port[i]);
                    await ns.scp(currentScript, ns.getHostname(), servers3port[i]);
                    ns.exec(currentScript, servers3port[i], threadCount, currentTarget);
                } else {
                    ns.tprint(`Skipping ${servers3port[i]}, hacking level or available thread count too low`);
                }
            }
        }
    } else {
        ns.tprint("Skipping 3 port servers, relaySMTP not found.")
    }

    if (ns.fileExists("HTTPWorm.exe")) {
        // handle 4 port servers
        for (var i = 0; i < servers4port.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(servers4port[i]) - ns.getServerUsedRam(servers4port[i])) / ns.getScriptRam(currentScript));
            if (ns.hasRootAccess(servers4port[i]) == true && threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${servers4port[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), servers4port[i]);
                ns.exec(currentScript, servers4port[i], threadCount, currentTarget);
            } else {
                if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel && threadCount > 0) {
                    ns.tprint(`Opening ports, Nuking ${servers4port[i]} and starting script`);
                    ns.brutessh(servers4port[i]);
                    ns.ftpcrack(servers4port[i]);
                    ns.relaysmtp(servers4port[i]);
                    ns.httpworm(servers4port[i]);
                    ns.nuke(servers4port[i]);
                    await ns.scp(currentScript, ns.getHostname(), servers4port[i]);
                    ns.exec(currentScript, servers4port[i], threadCount, currentTarget);
                } else {
                    ns.tprint(`Skipping ${servers4port[i]}, hacking level or available thread count too low`);
                }
            }
        }
    } else {
        ns.tprint("Skipping 3 port servers, HTTPWorm not found.")
    }

    if (ns.fileExists("SQLInject.exe")) {
        // handle 5 port servers
        for (var i = 0; i < servers5port.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(servers5port[i]) - ns.getServerUsedRam(servers5port[i])) / ns.getScriptRam(currentScript));
            if (ns.hasRootAccess(servers5port[i]) == true && threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${servers5port[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), servers5port[i]);
                ns.exec(currentScript, servers5port[i], threadCount, currentTarget);
            } else {
                if (ns.getServerRequiredHackingLevel >= ns.getHackingLevel && threadCount > 0) {
                    ns.tprint(`Opening ports, Nuking ${servers5port[i]} and starting script`);
                    ns.brutessh(servers5port[i]);
                    ns.ftpcrack(servers5port[i]);
                    ns.relaysmtp(servers5port[i]);
                    ns.httpworm(servers5port[i]);
                    ns.sqlinject(servers5port[i]);
                    ns.nuke(servers5port[i]);
                    await ns.scp(currentScript, ns.getHostname(), servers5port[i]);
                    ns.exec(currentScript, servers5port[i], threadCount, currentTarget);
                } else {
                    ns.tprint(`Skipping ${servers5port[i]}, hacking level or available thread count too low`);
                }
            }
        }
    } else {
        ns.tprint("Skipping 3 port servers, SQLInject not found.")
    }

    if (usingCustomServers == true) {
        // handle custom servers
        for (var i = 0; i < serversCustom.length; i++) {
            threadCount = Math.floor((ns.getServerMaxRam(serversCustom[i]) - ns.getServerUsedRam(serversCustom[i])) / ns.getScriptRam(currentScript));
            if (threadCount > 0) {
                ns.tprint(`Starting ${currentScript} on ${serversCustom[i]} with target ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), serversCustom[i]);
                ns.exec(currentScript, serversCustom[i], threadCount, currentTarget);
            } else {
                ns.tprint("No available threads.");
            }
        }
    }

    if (usingHost == true) {
        // handle custom servers
        threadCount = Math.floor((ns.getServerMaxRam(ns.getHostname()) - ns.getServerUsedRam(ns.getHostname())) / ns.getScriptRam(currentScript));
        threadCount = threadCount - 10;
        if (threadCount > 0) {
            ns.tprint(`Starting ${currentScript} with target ${currentTarget}`);
            ns.exec(currentScript, ns.getHostname(), threadCount, currentTarget);
        } else {
            ns.tprint("No available threads.");
        }
    }
}