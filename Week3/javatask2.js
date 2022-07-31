let RTLSideOne = ['FightFirewithFire', 'Ridethelightning', 'FromWhomTheBellTolls', 'FadetoBlack'];
let RTLtracktime = ['4.44, 6.37, 5.11, 6.55'];

//Displays first array
console.log(RTLSideOne);
//Displays second array
console.log(RTLtracktime);

//find method
console.log(RTLSideOne.find((RTL) => RTL === 'FightFirewithFire'));
//undefined means its not in array
console.log(RTLSideOne.find((RTL) => RTL === 'MasterofPuppets'));

//push method
console.log(RTLSideOne.push('TrappedUnderIce'));
console.log(RTLSideOne);

//pop method
console.log(RTLSideOne.pop());
console.log(RTLSideOne);

//slice method
console.log(RTLSideOne.slice(1,2));



//sorts array of numbers
console.log(RTLtracktime.sort());