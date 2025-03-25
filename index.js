// code your solution here
function superbowlWin(record) {
    console.log("Record received:", record); 
    let win = record.find(season => season.result === "W");
    console.log("Winning season found:", win); 
    return win ? win.year : undefined;
}


    
    