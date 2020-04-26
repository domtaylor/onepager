var now = new Date().getTime(); //Return the number of milliseconds since 1970/01/01:

var epochTimeApr30_1201am = 1588204801; // number of milliseconds since 1970/01/01 at Jul 15_11:59:59pm. See http://www.epochconverter.com/.

var timeTillChange = now - epochTimeApr30_1201am;

function changeSubText()
{
    if(epochTimeApr30_1201am <= now) 
    {
        document.getElementById('li').innerHTML = 'Summer 2020 Intake ';
    }
    else {
        document.getElementById('li').innerHTML = 'Winter 2020 Intake'; 
    }
}

setTimeout(changeSubText, timeTillChange); 

