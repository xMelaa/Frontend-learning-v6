const clockLabel = document.getElementById("clockLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    clockLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        //let amOrPm = hours >= 12 ? "pm" : "am";

        //hours = (hours%12) || 12; //comment because of polish version of time
        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hours}:${minutes}:${seconds}`;
    }

    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}