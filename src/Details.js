import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";

class Details extends React.Component {
  
  state = { loading: true };

  componentDidMount() {
    throw new Error("ha ha");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        breed: animal.breeds.primary,
        media: animal.photos,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const { animal, breed, name, location, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name} </button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundaries(props){
  return (
    <ErrorBoundaries>
      <Details {...props}/>
    </ErrorBoundaries>
  );
};
