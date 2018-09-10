function takeANumber(katzDeli,name){
katzDeli.push(`${name}`);
return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeliLine){
  var NEXT = katzDeliLine.shift()
  if (katzDeliLine.length === 0)
  {return 'There is nobody waiting to be served!'}
  else
  return [`Currently serving ${NEXT}.`]
}

function currentLine(katzDeliLine) {
  var lineOrder = [];
  
  if (katzDeliLine.length === 0) {
   return "The line is curently empty." ;
 }
  
  for (var i = 0; i < katzDeliLine.length; i += 1) {
    var name = katzDeliLine[i];
   lineOrder.push(' ' + (i + 1) + '. ' + name);
  }
  return "the line is currently:" + lineOrder;
}