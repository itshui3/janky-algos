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
    let cStart = dailyBounds1[0].split(':');
    let csHour = +cStart[0];
    let csMin = +cStart[1];
    
    for (let i = 0; i < calendar1.length; i++) {
        let start = calendar1[i][0].split(':');
        let end = calendar1[i][1].split(':');
        
        // prev endHour.endMin --> startHour.startMin
        let startHour = +start[0];
        let startMin = +start[1];

        let timeDiff = 60*(startHour - csHour) + (startMin - csMin);
        if (timeDiff > meetingDuration) {
            
            let availableWindow = [
                `${cStart[0]}:${(''+cStart[1]).length === 1 ? ''+cStart[1]+'0' : cStart[1]}`,
                `${start[0]}:${(''+start[1]).length === 1 ? ''+start[1]+'0' : start[1]}`
            ];

            cal1avail.push(availableWindow);
        }

        cStart = end;
        csHour = +end[0];
        csMin = +end[1];
        // assign next endHour.endMin
    }
    // last endHour.endMin --> dayEndHour.dayEndMin
    let endBound = dailyBounds1[1].split(':');
    let ebHour = +endBound[0];
    let ebMin = +endBound[1];
    
    let timeDiff = 60*(ebHour - csHour) + (ebMin - csMin);
    if (timeDiff > meetingDuration) {

        let availableWindow = [
            `${cStart[0]}:${(''+cStart[1]).length === 1 ? ''+cStart[1]+'0' : cStart[1]}`,
            `${endBound[0]}:${(''+endBound[1]).length === 1 ? ''+endBound[1]+'0' : endBound[1]}`
        ];

        cal1avail.push(availableWindow);
    }
    console.log(cal1avail);
    
    // [0.b] generate calendar 2 availabilities
    let cal2avail: string[][] = [];
    // init startHour.startMin -> 
    cStart = dailyBounds2[0].split(':');
    csHour = +cStart[0];
    csMin = +cStart[1];
    // init startHour.startMin ->
    for (let i = 0; i < calendar2.length; i++) {
        let start = calendar2[i][0].split(':');
        let end = calendar2[i][1].split(':');
        
        // prev endHour.endMin --> startHour.startMin
        let startHour = +start[0];
        let startMin = +start[1];

        let timeDiff = 60*(startHour - csHour) + (startMin - csMin);
        if (timeDiff > meetingDuration) {
            
            let availableWindow = [
                `${cStart[0]}:${(''+cStart[1]).length === 1 ? ''+cStart[1]+'0' : cStart[1]}`,
                `${start[0]}:${(''+start[1]).length === 1 ? ''+start[1]+'0' : start[1]}`
            ];

            cal2avail.push(availableWindow);
        }

        cStart = end;
        csHour = +end[0];
        csMin = +end[1];
        // assign next endHour.endMin
    }
    // last endHour.endMin --> dayEndHour.dayEndMin
        // last endHour.endMin --> dayEndHour.dayEndMin
    endBound = dailyBounds2[1].split(':');
    ebHour = +endBound[0];
    ebMin = +endBound[1];
    
    timeDiff = 60*(ebHour - csHour) + (ebMin - csMin);
    if (timeDiff > meetingDuration) {

        let availableWindow = [
            `${cStart[0]}:${(''+cStart[1]).length === 1 ? ''+cStart[1]+'0' : cStart[1]}`,
            `${endBound[0]}:${(''+endBound[1]).length === 1 ? ''+endBound[1]+'0' : endBound[1]}`
        ];

        cal2avail.push(availableWindow);
    }
    console.log(cal2avail);
    
    // [1] determine availability overlap periods
    
    // [2] determine windows of availability overlap > meetingDuration
    
return [['']];
}