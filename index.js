function stop(){
        let message = document.getElementById("message");
        let button = document.getElementById("button");
        button.style.animationDuration = "0s";
        button.style.visibility = "hidden";
        message.style.visibility= "visible"
        message.style.animationPlayState = "running"
        setTimeout(()=>message.style.visibility="hidden",
    3000)

    }