import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }, state) {
    console.log("here");
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      // console.log("medial length: " + media.length);
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;

    console.log("1", photos);

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (<img
              key={photo}
              onClick={this.handleIndexClick}
              //   onKeyUp={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />)
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
