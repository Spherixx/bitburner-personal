/** @param {NS} ns **/
export async function main(ns) {
    const args = ns.flags([["help", false]]);
    const server = ns.args[0];
    if (args.help || !server) {
        ns.tprint("This script attempts to open ports and nuke a server.");
        ns.tprint(`Usage: run ${ns.getScriptName()} SERVER`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()} n00dles`);
        return;
    }

    if (fileExists("BruteSSH.exe", "home")) {
        ns.tprint(`Attempting BruteSSH on ${server}`)
        ns.brutessh(server);
    }
    if (fileExists("FTPCrack.exe", "home")) {
        ns.tprint(`Attempting FTPCrack on ${server}`)
        ns.ftpcrack(server);
    }

    ns.nuke(server);
    ns.tprint(`Nuking ${server}`)


}