export function calendarMatching(
calendar1: string[][],
dailyBounds1: string[],
calendar2: string[][],
dailyBounds2: string[],
meetingDuration: number,
) {
// [0.a] generate calendar 1 availabilities
    let cal1avail: string[][] = [];
    // init startHour.startMin -> 
    let cStart = dailyBounds1[0];
    let csHour = getHour(cStart);
    let csMin = getMin(cStart);
    
    for (let i = 0; i < calendar1.length; i++) {
        let start = calendar1[i][0];
        let end = calendar1[i][1];
        
        // prev endHour.endMin --> startHour.startMin
        let startHour = getHour(start);
        let startMin = getMin(start);

        let timeDiff = 60*(startHour - csHour) + (startMin - csMin);
        if (timeDiff >= meetingDuration) {
            
            let availableWindow = [
                `${cStart}`,
                `${start}`
            ];

            cal1avail.push(availableWindow);
        }

        cStart = end;
        csHour = getHour(cStart);
        csMin = getMin(cStart);
        // assign next endHour.endMin
    }
    // last endHour.endMin --> dayEndHour.dayEndMin
    let endBound = dailyBounds1[1];
    let ebHour = getHour(endBound);
    let ebMin = getMin(endBound);
    
    let timeDiff = 60*(ebHour - csHour) + (ebMin - csMin);
    if (timeDiff >= meetingDuration) {

        let availableWindow = [
            `${cStart}`,
            `${endBound}`
        ];

        cal1avail.push(availableWindow);
    }
    
    // [0.b] generate calendar 2 availabilities
    let cal2avail: string[][] = [];
    // init startHour.startMin -> 
    cStart = dailyBounds2[0];
    csHour = getHour(cStart);
    csMin = getMin(cStart);
    // init startHour.startMin ->
    for (let i = 0; i < calendar2.length; i++) {
        let start = calendar2[i][0];
        let end = calendar2[i][1];
        
        // prev endHour.endMin --> startHour.startMin
        let startHour = getHour(start);
        let startMin = getMin(start);

        let timeDiff = 60*(startHour - csHour) + (startMin - csMin);
        if (timeDiff >= meetingDuration) {
            
            let availableWindow = [
                `${cStart}`,
                `${start}`
            ];

            cal2avail.push(availableWindow);
        }

        cStart = end;
        csHour = getHour(end);
        csMin = getMin(end);
        // assign next endHour.endMin
    }
    // last endHour.endMin --> dayEndHour.dayEndMin
        // last endHour.endMin --> dayEndHour.dayEndMin
    endBound = dailyBounds2[1];
    ebHour = getHour(endBound);
    ebMin = getMin(endBound);
    
    timeDiff = 60*(ebHour - csHour) + (ebMin - csMin);
    if (timeDiff >= meetingDuration) {

        let availableWindow = [
            `${cStart}`,
            `${endBound}`
        ];

        cal2avail.push(availableWindow);
    }

    let mutualAvail: string[][] = [];
    // [1] determine availability overlap periods
    let c1 = 0;
    let c2 = 0;
    while (c1 < cal1avail.length && c2 < cal2avail.length) {

        let start_c1Hour = getHour(cal1avail[c1][0]);
        let start_c1Min = getMin(cal1avail[c1][0]);

        
        let end_c1Hour = getHour(cal1avail[c1][1]);
        let end_c1Min = getMin(cal1avail[c1][1]);

        
        let start_c2Hour = getHour(cal2avail[c2][0]);
        let start_c2Min = getMin(cal2avail[c2][0]);

        
        let end_c2Hour = getHour(cal2avail[c2][1]);
        let end_c2Min = getMin(cal2avail[c2][1]);

        
        let start_c1inMins = getInMins(start_c1Hour, start_c1Min);
        let end_c1inMins = getInMins(end_c1Hour, end_c1Min);
        
        let start_c2inMins = getInMins(start_c2Hour, start_c2Min);
        let end_c2inMins = getInMins(end_c2Hour, end_c2Min);
        
        if (end_c2inMins - start_c1inMins < meetingDuration) {
            c2++;
            continue;
        } 
        if (end_c1inMins - start_c2inMins < meetingDuration) {
            c1++;
            continue;
        }
        
        let laterStart = start_c1inMins > start_c2inMins ? cal1avail[c1][0] : cal2avail[c2][0];
        let earlierEnd = end_c1inMins < end_c2inMins ? cal1avail[c1][1] : cal2avail[c2][1];
        
        mutualAvail.push([laterStart, earlierEnd]);

        c1++;
        c2++;
    }
    
    // [2] determine windows of availability overlap > meetingDuration
    
return mutualAvail.length ? mutualAvail : [];
}

function getInMins(hour: number, min: number) {
    return 60*(hour) + min;
}

function getHour(hourMin: string) {
    return +hourMin.split(':')[0];
}

function getMin(hourMin: string) {
    return +hourMin.split(':')[1];
}