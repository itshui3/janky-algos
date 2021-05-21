// This is an input class. Do not edit.
class OrgChart {
name: string;
directReports: OrgChart[];

constructor(name: string) {
    this.name = name;
    this.directReports = [];
}
}

export function getLowestCommonManager(topManager: OrgChart, reportOne: OrgChart, reportTwo: OrgChart): OrgChart {
// Write your code here.
    let lcm = re_findReports(topManager, reportOne, reportTwo);

    if (lcm) {return lcm;}
    return topManager;
}

function re_findReports(node: OrgChart, r1: OrgChart, r2: OrgChart): OrgChart | null {
    // if node is report itself, it cannot be a common parent to the 2 input reports 
    if (node === r1) return r1;
    if (node === r2) return r2;
    
    let foundR1: boolean = false;
    let foundR2: boolean = false;
    let foundLCM: OrgChart | null = null;
    
    node.directReports.forEach((dr) => {
        const fishedReport: OrgChart | null = re_findReports(dr, r1, r2);
        if (fishedReport === r1) {
            foundR1 = true;
        } else if (fishedReport === r2) {
            foundR2 = true;
        } else if (fishedReport) {

            foundLCM = fishedReport;
        }
    });
    
    if (foundLCM) return foundLCM;
    if (foundR1 && foundR2) return node;
    else if (foundR1) return r1;
    else if (foundR2) return r2;
    else return null;
}