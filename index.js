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

function currentLine(line) {
    var theline = []
    if (line.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < line.length; i++) {
        line += (i + 1) + ". " + line[i] + ", "
      }
      theline = theline.slice(0, theline.length-2)
      return "The line is currently: " + theline
    }
}