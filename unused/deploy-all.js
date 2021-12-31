/** @param {NS} ns **/
export async function main(ns) {

	const servers = ["Spherix0-32GB", "Spherix1-32GB", "Spherix2-32GB", "Spherix3-32GB", "Spherix4-32GB", "Spherix5-32GB", 
	"Spherix6-32GB", "Spherix7-32GB", "Spherix8-32GB", "Spherix9-32GB", "Spherix10-32GB", "Spherix11-32GB", "Spherix12-32GB", 
	"Spherix13-32GB", "Spherix14-32GB", "Spherix15-32GB", "Spherix16-32GB", "Spherix17-32GB", "Spherix18-32GB", "Spherix19-32GB", 
	"Spherix20-32GB", "Spherix21-32GB", "Spherix22-32GB", "Spherix23-32GB", "Spherix24-32GB"];

	for (var i = 0; i < servers.length; i++) {

		const host = servers[i];
		const script = "basic0.js";
		const threads = Math.floor((ns.getServerMaxRam(host) - ns.getServerUsedRam(host)) / ns.getScriptRam(script));

		if (!ns.serverExists(host)) {
			ns.tprint(`Server '${host}' does not exist. Aborting.`);
			return;
		}
		if (!ns.ls(ns.getHostname()).find(f => f === script)) {
			ns.tprint(`Script '${script}' does not exist. Aborting.`);
			return;
		}

		ns.tprint(`Launching script '${script}' on server '${host}' with ${threads} threads and the following arguments: ${host}`);
		await ns.scp(script, ns.getHostname(), host);
		ns.exec(script, host, threads, host);
	}

}
