import React, { Component } from 'react';
import './App.css';

import { Container, Row, Button } from 'react-bootstrap'

import NavBars from './component/KNavBar';
import MovieTab from './component/MovieTabs';

import movieData from './movieData.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: movieData.movie,
      page: 12
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    // console.log(this.state)
    let newpage = this.state.page + 12
    this.setState({ page: newpage })
  }


  render() {
    let movieItems = []
    let i;
    let counter = 0;
    // console.log(this.state.page)

    for (i = 0; this.state.page > i && this.state.movie.length > i; i++) {
      console.log(i)
      movieItems.push(<MovieTab key={this.state.movie[i].id} movie={this.state.movie[i].name} img={this.state.movie[i].img} />)
    }


    return (
      <div>
        <NavBars />
        <Container>
          <Row bg="dark" variant="dark">
            {movieItems}
          </Row>
        </Container>
        <Button onClick={this.handleClick} variant="primary" size="lg" active>
          Primary button
        </Button>
      </div >
    );
  }
}

export default App;
