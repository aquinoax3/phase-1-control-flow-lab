function scuberGreetingForFeet(feetRide){

  if (feetRide <= 400) {
    return 'This one is on me!';

  } else if (feetRide > 2500) {
    return 'No can do.';
    
  } else if (feetRide > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;

  }
}