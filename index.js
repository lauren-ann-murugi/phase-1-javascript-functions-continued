// implementing a function called saturdayFun
//default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity=`roller-skate`) {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

// implementing a function called mondayWork
//default activity 'go to the office' when no arguments are passed
function mondayWork(activity=`go to the office`) {
    return `This Monday, I will ${activity}.`;
}
mondayWork();

//implementing a function called wrapAdjective
function wrapAdjective() {
    const innerFunction = function (adjective = "special")  {
        return `You are ${adjective}!`;
    };
    
  };
function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

wrapAdjective("%")("a dedicated programmer");