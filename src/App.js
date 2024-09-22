import React from "react";
import { Card, Button } from "react-bootstrap";
class App extends React.Component {
  constructor() {
    super();
    // Define the state of the component
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "lorem ipsum",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Developer",
      },
      show: false,
      timeElapsed: 0,
      timeMounted: 0,
    };
  }
  // toggleHandler function to change the state of show
  toggleHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  //  Create a field thay shows the time  interval since the last componenet was mounted using the component lifecycle method

  componentDidMount() {
    this.setState({ timeMounted: new Date() });
    this.setState({ timwMounted: new Date() });
    this.timer = setInterval(() => {
      this.updateTimeElapsed();
    }, 1000);
  }
  updateTimeElapsed = () => {
    const { timeMounted } = this.state;
    const currentTime = new Date();
    const difference = Math.floor((currentTime - timeMounted) / 1000);
    console.log(difference);
    this.setState({ timeElapsed: difference });
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    //console.log(this.state.timeMounted);
    return (
      <div>
        {/* // Button to toggle the show state */}
        <Button onClick={this.toggleHandler}>
          {this.state.show ? `Hide Profile` : `Show Profile`}
        </Button>
        {/* // if show is true then show the card */}
        {this.state.show ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text>{this.state.person.profession}</Card.Text>
            </Card.Body>
          </Card>
        ) : null}
        <p>Time Elapsed: {this.state.timeElapsed}</p>
      </div>
    );
  }
}
export default App;
// The App component is a class component that has a state object with two properties: person and show. The person property is an object that contains the fullName, bio, imgSrc, and profession properties. The show property is a boolean value that determines whether the Card component should be displayed or not.
