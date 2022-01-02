/** @param {NS} ns **/
export async function main(ns) {
	const args = ns.flags([["help", false]]);
	if (args._[0] == "help") {
		ns.tprint("This script is used to manage custom servers.");
		ns.tprint(`Usage: run ${ns.getScriptName()} HOST SCRIPT ARGUMENTS`);
		ns.tprint("Example:");
		ns.tprint(`> run ${ns.getScriptName()} n00dles basic_hack.js foodnstuff`);
		return;
	}
	
	const scriptMode = args._[0];
	var customServers = [];
	var haveServers = false;
	var serverCount = 0;
	var serverRAM = 0;

	if (ns.getPurchasedServers().length > 0) {
		haveServers = true;
		serverCount  = ns.getPurchasedServers().length;
		customServers = ns.getPurchasedServers();
		serverRAM = ns.getServerMaxRam(customServers[sererCount]);
	} else {
		haveServers = false;
	}

	if (scriptMode == "kill") {
		if (haveServers == true) {
			ns.tprint("Killing scripts on custom servers");
			for (var i = 0; i <= serverCount; i++) {
				ns.killall(customServers[i]);
			}
		} else {
			ns.tprint("You don't have any servers to kill scripts on");
		}
	} else if (scriptMode == "delete") {
		if (haveServers == true) {
			ns.tprint("Deleting custom servers");
			for (var i = 0; i <= serverCount; i++) {
				ns.deleteServer(customServers[i]);
				haveServers = false;
			}
		} else {
			ns.tprint("You don't have any servers to delete");
		}
	} else if (scriptMode == "upgrade" && haveServers == false) {
		var ramMulti = 64;
		var balance = ns.getPlayer().money;
		var perServer = balance / 25;
		var ramToBuy = 0;
		// ns.tprint("$ per Server: " + perServer);
		for (var i = 0; i < 14; i++) {
			// ns.tprint("$:" + ns.getPurchasedServerCost(2 * ramMulti) + " RAM:" + 2 * ramMulti);
			if (perServer > ns.getPurchasedServerCost(2 * ramMulti)) {
				ramToBuy = 2 * ramMulti;
			}
			ramMulti = 2 * ramMulti;
		}
		// ns.tprint(ramToBuy);
		for (var s = 0; s <= 24; s++) {
			ns.purchaseServer("Spherix" + s + ramToBuy + "GB", ramToBuy);
		}
		ns.tprint("Purchased servers with: " + ramToBuy + "GB");
	} else {
		ns.tprint("Run with kill/delete args first");
	}

}
