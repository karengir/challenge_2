import React, { Component } from 'react'

export default class PhotoAlbum extends Component {

    constructor() {
        super();
        this.state = {
            album: [],
            id: ''
        };
    }

    fetch_Photo_Album = () => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.state.id}/photos`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ album: json })
            });
    };

    inputChange = (event) => {
        this.setState({ id: event.target.value });
    }

    render() {
        const photoCard = this.state.album.map((photo, index) => (
            <div class="cards-list " key={index}>
                    <div class="card 1">
                        <div class="card_image"> <img src={photo.thumbnailUrl} /> </div>
                        <div class="card_title title-white">
                            <p>{photo.title}</p>
                        </div>
                    </div>
                </div>
            ));
        return (
            <div>
                <div className="dsp">
                    <input className="" placeholder="Enter album id" type="text" name="id" onChange={this.inputChange} />
                    <button onClick={this.fetch_Photo_Album}>
                        <span></span>
                        <span></span>
                        <span></span>   
                        <span></span>
                        Get Photos</button>                
                </div>
                
                <div className="row ">
                {photoCard}
                </div>
                </div>
        )
    }
}
