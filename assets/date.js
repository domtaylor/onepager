var now = new Date().getTime(); //Return the number of milliseconds since 1970/01/01:

var epochTimeApr30_1201am = 1588204801; // number of milliseconds since 1970/01/01 at Jul 15_11:59:59pm. See http://www.epochconverter.com/.

var timeTillChange = epochTimeApr30_1201am - now;

function changeSubText()
{
    if(epochTimeApr30_1201am <= now) 
    {
        document.getElementById('subtext').innerHTML = 'Summer 2020 ';
    }
    else {
        document.getElementById('subtext').innerHTML = 'Winter 2020 '; 
    }
}

setTimeout(changeSubText, timeTillChange); 

