// code your solution here
function saturdayFun(activity="roller-skate"){
    return console.log(`This Saturday, I want to ${activity}!`);
} 
const mondayWork= function(act="go to the office"){
    return console.log(`This Monday, I will ${act}.`); 
}
function wrapAdjective(par="*"){
    return function(innerPar="special"){
        return console.log(`You are ${par}${innerPar}${par}!`);
    }
}
