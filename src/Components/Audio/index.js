import React, {Component} from "react";
import globalAudio from "./globalAudio"

export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.state = { 'play': false ,'name':globalAudio.currentlyPlaying,'songName':"" };
        this.togglePlay = this.togglePlay.bind(this);
        this.playNext = this.playNext.bind(this);
        this.playPrevious = this.playPrevious.bind(this);
        this.getSongName = this.getSongName.bind(this);

    }

    togglePlay() {
        this.setState({'play': !this.state.play,'songName':globalAudio.songName(this.state.name)}, () => {
            this.state.play ? globalAudio.play(this.state.name) : globalAudio.pause(this.state.name);
        });
    }

    componentWillUnmount () {
        globalAudio.pause(this.state.name);
    }

    componentDidMount() {
        // if(window.location.href.includes('')) {
        //     this.togglePlay();
        // }
    }

    playNext(){
        let s_next = globalAudio.next(this.state.name);
        this.setState({'play':true,name:s_next,'songName':globalAudio.songName(this.state.name)});
        globalAudio.play(this.state.name);
    }

    playPrevious(){
        let s_next = globalAudio.previous(this.state.name);
        this.setState({'play':true,name:s_next,'songName':globalAudio.songName(this.state.name)});
        globalAudio.play(this.state.name);
    }

    getSongName (){
        let s_name =globalAudio.songName(this.state.name);
        return this.state.play ? this.setState({"songName":s_name}) : "";
    }

    render() {

        return (
            <div style={{background:"white",borderTop:'2px #ccc'}} className="container-fluid">
                <center>
                <button className="audio-button" aria-label="Previous" onClick={this.playPrevious}>  Previous</button>

                {this.state.play
                    ? <button className="audio-button" aria-label="Pause" onClick={this.togglePlay}>Pause</button>
                    : <button className="audio-button" aria-label="Play" onClick={this.togglePlay}>Play</button>}

                <button className="audio-button" aria-label="Next" onClick={this.playNext}>Next</button>
                    <br/>
                    <span>{ this.state.songName }</span>
                </center>
            </div>
        )
    }
}