/** @param {NS} ns **/
export async function main(ns) {
    const serverList = ["foodnstuff", "sigma-cosmetics", "joesguns", "nectar-net", "hong-fang-tea", "harakiri-sushi", "neo-net", 
    "zer0", "max-hardware", "iron-gym", "silver-helix", "crush-fitness", "phantasy", "omega-net", "the-hub", "johnson-ortho", 
    "netlink", "rothman-uni", "summit-uni", "catalyst", "comptek", "millenium-fitness", "rho-construction", 
    "syscore", "lexo-corp", "alpha-ent", "aevum-police", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "zb-def", "nova-med", 
    "applied-energetics", "zb-institute", "vitalife", "titan-labs", "solaris", "microdyne", "helios", "deltaone", "icarus", "zeus-med", 
    "omnia", "defcomm", "galactic-cyber", "infocomm", "taiyang-digital", "stormtech", "aerocorp", "clarkinc", "omnitek", "nwo", "4sigma", 
    "blade", "b-and-a", "ecorp", "fulcrumtech", "megacorp", "kuai-gong", "fulcrumassets", "powerhouse-fitness"];

    const serverMoney = [50000000, 57500000, 62500000, 68750000, 75000000, 100000000, 125000000, 187500000, 250000000, 
        500000000, 1125000000, 1148624925, 600000000, 1704019525, 4651296150, 1861077575, 6875000000, 5896239075, 
        8475556325, 12413073800, 6055693800, 6250000000, 13145071875, 12669164875, 17618372025, 17218215650, 7118793150, 
        11250000000, 42050568450, 25467499550, 29614158400, 26749340575, 27514830025, 22883508225, 21932614800, 17596638650, 
        20521471175, 20133193775, 16482480375, 17421731075, 37680921950, 24176981000, 33383809575, 24969023100, 22538959075, 
        19644464475, 20590952400, 20987644075, 26448020525, 25810300050, 531307109425, 435895287700, 807992201125, 389884422150, 
        350827340675, 654760502925, 1675444856500, 38375093950, 1066712045700, 710620190550, 25000000, 22500000000];

	const serverSecurity = [17, 10, 15, 20, 15, 15, 25, 25, 15, 30, 30, 40, 20, 33, 37, 48, 34, 100, 
        59, 81, 21, 100, 76, 82, 100, 42, 100, 96, 75, 71, 89, 62, 63, 67, 90, 83, 70, 78, 73, 91, 100, 
        88, 96, 89, 91, 57, 73, 78, 90, 89, 65, 96, 99, 67, 93, 86, 99, 90, 99, 95, 99, 62];

    const serverGrowth = [5, 10, 20, 25, 20, 40, 25, 40, 30, 20, 30, 27, 35, 35, 51, 42, 53, 
        39, 41, 46, 60, 31, 53, 64, 60, 52, 39, 57, 82, 79, 83, 72, 82, 75, 85, 69, 73, 78, 88, 76, 
        56, 87, 78, 66, 58, 71, 36, 78, 80, 59, 73, 98, 92, 89, 78, 64, 99, 80, 99, 93, 1, 51];

	const serverLevel = [1, 5, 10, 20, 30, 40, 50, 75, 80, 100, 150, 263, 100, 209, 308, 275, 377, 
        379, 454, 403, 319, 479, 501, 606, 685, 589, 424, 749, 825, 823, 843, 791, 788, 809, 766, 861, 862, 750, 
        810, 898, 862, 892, 814, 929, 881, 853, 948, 928, 955, 911, 1187, 1005, 1146, 984, 1184, 1065, 1143, 1056, 1112, 
        954, 1496, 981];

    var serverHackChance = [];
    var serverHackTime = [];
    var serverGrowTime = [];
    var serverWeakenTime = [];

    for (var k = 0; k < serverList.length; k++) {
        serverHackChance[k] = (ns.hackAnalyzeChance(serverList[k]) * 100).toFixed(2);
        serverHackTime[k] = ns.getHackTime(serverList[k]);
        serverGrowTime[k] = ns.getGrowTime(serverList[k]);
        serverWeakenTime[k] = ns.getWeakenTime(serverList[k]);
    }

    var serverWeights = [];

    var moneyWeight = 0.20;
    var securityWeight = 0.25;
    var growthWeight = 0.15;
    var levelWeight = 0.05;
    var chanceWeight = 0.25;
    var htimeWeight = 0.1;
    var gtimeWeight = 0.20;
    var wtimeWeight = 0.15;

    var weight = 100;

    // min money, security, growth, level, hack chance, hack time, grow time, weaken time
    var serverMin = [Math.min(...serverMoney), Math.min(...serverSecurity), Math.min(...serverGrowth), Math.min(...serverLevel), 
        Math.min(...serverHackChance), Math.min(...serverHackTime), Math.min(...serverGrowTime), Math.min(...serverWeakenTime)];
    //ns.tprint(serverMin);
    // max money, security, growth, level, hack chance, hack time, grow time, weaken time
    var serverMax = [Math.max(...serverMoney), Math.max(...serverSecurity), Math.max(...serverGrowth), Math.max(...serverLevel), 
        Math.max(...serverHackChance), Math.max(...serverHackTime), Math.max(...serverGrowTime), Math.max(...serverWeakenTime)];
    //ns.tprint(serverMax);
    //ns.tprint(`${serverList.length}, ${serverSecurity.length}, ${serverGrowth.length}, ${serverLevel.length}`)
    var tmoney = 0;
    var tsecurity = 0;
    var tgrowth = 0;
    var tlevel = 0;
    var tchance = 0;
    var thackt = 0;
    var tgrowt = 0;
    var tweakt = 0;
    for (var j = 0; j < serverList.length; j++) {
		tmoney += serverMoney[j];
        tsecurity += serverSecurity[j];
        tgrowth += serverGrowth[j];
        tlevel += serverLevel[j];
        tchance += serverHackChance[j];
        thackt += serverHackTime[j];
        tgrowt += serverGrowTime[j];
        tweakt += serverWeakenTime[j];
	}
    // total money, security, growth, level, hack chance, hack time, grow time, weaken time
    var serverTotals = [tmoney, tsecurity, tgrowth, tlevel, tchance, thackt, tgrowt, tweakt];
    //ns.tprint(serverTotals);
    // average money, security, growth, level, hack chance, hack time, grow time, weaken time
    var serverAvg = [(serverTotals[0] / 62).toFixed(), (serverTotals[1] / 62).toFixed(), (serverTotals[2] / 62).toFixed(), (serverTotals[3] / 62).toFixed(), 
    (serverTotals[4] / 62).toFixed(), (serverTotals[5] / 62).toFixed(), (serverTotals[6] / 62).toFixed(), (serverTotals[7] / 62).toFixed()];
    //ns.tprint(serverAvg);

    for (var i = 0; i < serverList.length; i++) {
        // calculate money weight
        if (ns.getServerMaxMoney(serverList[i]) > serverAvg[0]) {
            weight += (weight * moneyWeight);
        } else {
            weight -= (weight * moneyWeight);
        }
        // calculate security weight
        if (ns.getServerSecurityLevel(serverList[i]) < serverAvg[1]) {
            weight += (weight * securityWeight);
        } else {
            weight -= (weight * securityWeight);
        }
        // calculate growth weight
        if (ns.getServerGrowth(serverList[i]) > serverAvg[2]) {
            weight += (weight * growthWeight);
        } else {
            weight -= (weight * growthWeight);
        }
        // calculate level weight
        if (ns.getServerRequiredHackingLevel(serverList[i]) < serverAvg[3]) {
            weight += (weight * levelWeight);
        } else {
            weight -= (weight * levelWeight);
        }
        // calculate hack chance weight
        if ((ns.hackAnalyzeChance(serverList[i]) * 100).toFixed(2) > serverAvg[4]) {
            weight += (weight * chanceWeight);
        } else {
            weight -= (weight * chanceWeight);
        }
        // calculate hack time weight
        if (ns.getHackTime(serverList[i]) < serverAvg[5]) {
            weight += (weight * htimeWeight);
        } else {
            weight -= (weight * htimeWeight);
        }
        // calculate grow time weight
        if (ns.getGrowTime(serverList[i]) < serverAvg[6]) {
            weight += (weight * gtimeWeight);
        } else {
            weight -= (weight * gtimeWeight);
        }
        // calculate weaken time weight
        if (ns.getWeakenTime(serverList[i]) < serverAvg[7]) {
            weight += (weight * wtimeWeight);
        } else {
            weight -= (weight * wtimeWeight);
        }
        serverWeights[i] = (weight).toFixed(2);
        ns.tprint((weight).toFixed(2));
        weight = 100;
    }
    ns.tprint(serverWeights);

    for (var l = 0; l < serverWeights.length; l++) {
        if (Math.max(...serverWeights) == serverWeights[l]) {
            ns.tprint(serverList[l]);
        }
    }
}