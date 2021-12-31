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

    // handle 0 port servers
    for (var i = 0; i < servers0port.length; i++) {
        if (ns.hasRootAccess(servers0port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers0port[i]}, running getRoot`);
            getRoot(servers0port[i], 0);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers0port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers0port[i]);
            ns.exec(currentScript, servers0port[i], getAvailableThreads(servers0port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle 1 port servers
    for (var i = 0; i < servers1port.length; i++) {
        if (ns.hasRootAccess(servers1port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers1port[i]}, running getRoot`);
            getRoot(servers1port[i], 1);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers1port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers1port[i]);
            ns.exec(currentScript, servers1port[i], getAvailableThreads(servers1port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle 2 port servers
    for (var i = 0; i < servers2port.length; i++) {
        if (ns.hasRootAccess(servers2port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers2port[i]}, running getRoot`);
            getRoot(servers2port[i], 2);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers2port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers2port[i]);
            ns.exec(currentScript, servers2port[i], getAvailableThreads(servers2port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle 3 port servers
    for (var i = 0; i < servers3port.length; i++) {
        if (ns.hasRootAccess(servers3port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers3port[i]}, running getRoot`);
            getRoot(servers3port[i], 3);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers3port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers3port[i]);
            ns.exec(currentScript, servers3port[i], getAvailableThreads(servers3port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle 4 port servers
    for (var i = 0; i < servers4port.length; i++) {
        if (ns.hasRootAccess(servers4port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers4port[i]}, running getRoot`);
            getRoot(servers4port[i], 4);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers4port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers4port[i]);
            ns.exec(currentScript, servers4port[i], getAvailableThreads(servers4port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle 5 port servers
    for (var i = 0; i < servers5port.length; i++) {
        if (ns.hasRootAccess(servers5port[i]) == true) {
        } else {
            ns.tprint(`We don't have root on ${servers5port[i]}, running getRoot`);
            getRoot(servers5port[i], 5);
        }
        try {
            ns.tprint(`Copying ${currentScript} to ${servers5port[i]} targeting ${currentTarget}`);
            await ns.scp(currentScript, ns.getHostname(), servers5port[i]);
            ns.exec(currentScript, servers5port[i], getAvailableThreads(servers5port[i], currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }
    // handle custom servers
    if (usingCustomServers == true) {
        for (var i = 0; i < serversCustom.length; i++) {
            try {
                ns.tprint(`Copying ${currentScript} to ${serversCustom[i]} targeting ${currentTarget}`);
                await ns.scp(currentScript, ns.getHostname(), serversCustom[i]);
                ns.exec(currentScript, serversCustom[i], getAvailableThreads(serversCustom[i], currentScript), currentTarget);
            } catch(err) {
                //ns.tprint(err);
            }
        }
    }
    // handle host
    if (usingHost == true) {
        try {
            ns.tprint(`Executing ${currentScript} targeting ${currentTarget}`);
            ns.exec(currentScript, ns.getHostname(), getAvailableThreads(ns.getHostname(), currentScript), currentTarget);
        } catch(err) {
            //ns.tprint(err);
        }
    }   
    /** usage: getAvailableThreads(serverName, script)
     *  returns the number of threads available
     *  on the target server with the RAM usage of the
     *  current script **/
    function getAvailableThreads(server, script) {
        if (ns.getServerMaxRam(server) > 0) {
            return Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / ns.getScriptRam(script));
        } else {
            ns.tprint(`${server} appears to have no RAM.`);
            return 0;
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
            } catch(err) {
                ns.tprint(err)
            }
            
        }
    }
}
