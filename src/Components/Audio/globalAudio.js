import dark_poison from "./mp3/BKScandalous _dark_poison.mp3";
import expensive from "./mp3/BKScandalous _expensive.mp3";
import pills_in_the_vally from "./mp3/BKScandalous _pills_In_the_vally.mp3";
import proud_of_me from "./mp3/BKScandalous _proud_of_me.mp3";
import switch_slides from "./mp3/BKScandalous _switch_sides.mp3";

const audios = {
    1: new Audio(dark_poison),
    2: new Audio(expensive),
    3: new Audio(pills_in_the_vally),
    4: new Audio(proud_of_me),
    5: new Audio(switch_slides)
};

let currentlyPlaying = null;

const bulk_pause = () =>{
    Object.keys(audios).forEach(function(key) {
        audios[key].pause();
    });
};

const play = (name) => {

    if (currentlyPlaying) {
        bulk_pause();
    }

    if(!currentlyPlaying){
        name=5;
    }
    if(audios[name]) {
        audios[name].play();
        currentlyPlaying = name;
    }
};

const pause = (name) => {
    currentlyPlaying = null;
    bulk_pause();
};

const next = (from) => {

    let next=null;

    if (from===null){
        from=5;
    }

    Object.keys(audios).forEach(function(key) {

        if (parseInt(key)===parseInt(from)) {
            if(parseInt(key) < 5 && parseInt(key) >= 1) {
                currentlyPlaying = parseInt(key) + 1;
            }else{
                currentlyPlaying = 1;
            }
            next=currentlyPlaying;
        }

    });

    return next;
};

const previous = (from) => {
    let next=null;

    if (from===null){
        from=5;
    }

    Object.keys(audios).forEach(function(key) {

        if (parseInt(key)===parseInt(from)) {
            if(parseInt(key) > 1 && parseInt(key) <= 5 ) {
                currentlyPlaying = parseInt(key) - 1;
            }else{
                currentlyPlaying = 5;
            }
            next=currentlyPlaying;
        }

    });

    return next;
};

const songName = (id) =>{
    let song="";

    if(!id){
        song="";
    }
    if(audios[id]) {
        if(id===1){
            song="BKScandalous Dark Poison";
        }else if(id===2){
            song="BKScandalous Expensive";
        }else if(id===3){
            song="BKScandalous Pills In The Vally";
        }else if(id===4){
            song="BKScandalous Proud Of Me";
        }else if(id===5){
            song="BKScandalous Switch Sides";
        }
    }

    return song;
};

export default {
    pause,
    play,
    currentlyPlaying,
    next,
    previous,
    songName
};