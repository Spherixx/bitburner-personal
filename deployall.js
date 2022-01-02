/** @param {NS} ns **/
export async function main(ns) {
    const args = ns.flags([["help", false]]);
    if (args.help || args.length < 2) {
        ns.tprint("This script is used to do everything.");
        ns.tprint(`Usage: run ${ns.getScriptName()} script target useHost? useCustom? `);
        ns.tprint(`The first 2 arguments are required`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()} basic0.js the-hub host custom kill`);
        return;
    }
    const servers = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi",
        "neo-net", "zer0", "max-hardware", "iron-gym", "CSEC", "silver-helix", "crush-fitness", "phantasy", "omega-net", "the-hub",
        "johnson-ortho", "avmnite-02h", "netlink", "rothman-uni", "summit-uni", "catalyst", "comptek", "I.I.I.I",
        "millenium-fitness", "rho-construction", "syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm",
        "unitalife", "univ-energy", "zb-def", "nova-med", "applied-energetics", "zb-institute", "vitalife", "titan-labs",
        "solaris", "microdyne", "helios", "deltaone", "icarus", "zeus-med", "omnia", "defcomm", "galactic-cyber", "infocomm",
        "taiyang-digital", "stormtech", "aerocorp", "clarkinc", "omnitek", "nwo", "4sigma", "blade", "b-and-a", "ecorp",
        "fulcrumtech", "megacorp", "kuai-gong", "fulcrumassets", "powerhouse-fitness"];

    const currentScript = args._[0];
    const currentTarget = args._[1];
    var usingCustomServers = true;
    var usingHost = true;
    if (args._[2] == "host" || args._[3] == "host") {
        usingHost = true;
    } else if (args._[2] == "custom" || args._[3] == "custom") {
        usingCustomServers = true;
    }
    const customServers = ns.getPurchasedServers();
    var killFirst = false;
    if (args._[4] == "kill") {
        killFirst = true;
    }

    for (var i = 0; i < servers.length; i++) {
        if (ns.getServerNumPortsRequired(servers[i]) == 0) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 0);
            }
        } else if (ns.getServerNumPortsRequired(servers[i]) == 1) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 1);
            }
        } else if (ns.getServerNumPortsRequired(servers[i]) == 2) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 2);
            }
        } else if (ns.getServerNumPortsRequired(servers[i]) == 3) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 3);
            }
        } else if (ns.getServerNumPortsRequired(servers[i]) == 4) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 4);
            }
        } else if (ns.getServerNumPortsRequired(servers[i]) == 5) {
            if (ns.hasRootAccess(servers[i]) == true) {
                await deployScript(servers[i])
            } else {
                ns.tprint(`We don't have root on ${servers[i]}, running getRoot`);
                getRoot(servers[i], 5);
            }
        }
    }
    if (usingCustomServers == true) {
        for (var j = 0; j < customServers.length; j++) {
            await deployScript(customServers[j]);
        }
    }
    if (usingHost == true) {
        await deployScript(ns.getHostname());
    }
    /** usage: deployScript(server)
     *  deploys the script
     * **/
    async function deployScript(server) {
        var threads = Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / ns.getScriptRam(currentScript));
        if (threads > 0) {
            try {
                if (killFirst == true) {
                    ns.killall(server);
                }
                ns.tprint(`Copying ${currentScript} to ${server} targeting ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), server);
                ns.exec(currentScript, server, threads, currentTarget);
            } catch (err) {
                ns.tprint(err);
            }
        } else {
            ns.tprint(`${server} appears to have no available threads.`);
        }
    }
    /** usage: getRoot(serverName, #ofports)
     *  returns true if hasRootAcces is true
     *  attempts to gain root otherwise **/
    function getRoot(server, ports) {
        if (ns.hasRootAccess == true) {
            return true;
        } else {
            try {
                if (ns.fileExists("BruteSSH.exe", "home") == true && ports == 1) {
                    ns.tprint(`Running BruteSSH on ${server}`);
                    ns.brutessh(server);
                } else if (ns.fileExists("BruteSSH.exe", "home") == false) {
                    ns.tprint("Can't find BruteSSH.exe");
                }
                if (ns.fileExists("FTPCrack.exe", "home") == true && ports == 2) {
                    ns.tprint(`Running BruteSSH and FTPCrack on ${server}`);
                    ns.brutessh(server);
                    ns.ftpcrack(server);
                } else if (ns.fileExists("FTPCrack.exe", "home") == false) {
                    ns.tprint("Can't find FTPCrack.exe");
                }
                if (ns.fileExists("relaySMTP.exe", "home") == true && ports == 3) {
                    ns.tprint(`Running BruteSSH, FTPCrack and relaySMTP on ${server}`);
                    ns.brutessh(server);
                    ns.ftpcrack(server);
                    ns.relaysmtp(server);
                } else if (ns.fileExists("relaySMTP.exe", "home") == false) {
                    ns.tprint("Can't find relaySMTP.exe");
                }
                if (ns.fileExists("HTTPWorm.exe", "home") == true && ports == 4) {
                    ns.tprint(`Running BruteSSH, FTPCrack, relaySMTP and HTTPWorm on ${server}`);
                    ns.brutessh(server);
                    ns.ftpcrack(server);
                    ns.relaysmtp(server);
                    ns.httpworm(server);
                } else if (ns.fileExists("HTTPWorm.exe", "home") == false) {
                    ns.tprint("Can't find HTTPWorm.exe");
                }
                if (ns.fileExists("SQLInject.exe", "home") == true && ports == 5) {
                    ns.tprint(`Running BruteSSH, FTPCrack, relaySMTP, HTTPWorm and SQLInject on ${server}`);
                    ns.brutessh(server);
                    ns.ftpcrack(server);
                    ns.relaysmtp(server);
                    ns.httpworm(server);
                    ns.sqlinject(server);
                } else if (ns.fileExists("SQLInject.exe", "home") == false) {
                    ns.tprint("Can't find SQLInject.exe");
                }
                ns.tprint(`Attempting to Nuke ${server}`);
                ns.nuke(server);
                return true;
            } catch (err) {
                ns.tprint(err)
            }
        }
    }
}