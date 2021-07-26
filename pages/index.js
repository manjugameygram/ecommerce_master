import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/Common/Banner';
import Subscribe from '../components/Common/Subscribe';
import NetFlixSlider from '../components/Common/NetflixSlider';

const movies = [
  {
    id: 1,
    image: require("./../images/games/slide1.jpg"),
    imageBg: require("./../images/games/slide1b.webp"),
    title: '1983'
  },
  {
    id: 2,
    image: require("./../images/games/slide2.jpg"),
    imageBg: require("./../images/games/slide2b.webp"),
    title: 'Russian doll'
  },
  {
    id: 3,
    image: require("./../images/games/slide3.jpg"),
    imageBg: require("./../images/games/slide3b.webp"),
    title: 'The rain',
  },
  {
    id: 4,
    image: require("./../images/games/slide4.jpg"),
    imageBg: require("./../images/games/slide4b.webp"),
    title: 'Sex education'
  },
  {
    id: 5,
    image: require("./../images/games/slide5.jpg"),
    imageBg: require("./../images/games/slide5b.webp"),
    title: 'Elite'
  },
  {
    id: 6,
    image: require("./../images/games/slide6.jpg"),
    imageBg: require("./../images/games/slide6b.webp"),
    title: 'Black mirror'
  },
  {
    id: 4,
    image: require("./../images/games/slide4.jpg"),
    imageBg: require("./../images/games/slide4b.webp"),
    title: 'Sex education'
  },
  {
    id: 5,
    image: require("./../images/games/slide5.jpg"),
    imageBg: require("./../images/games/slide5b.webp"),
    title: 'Elite'
  },
  {
    id: 6,
    image: require("./../images/games/slide6.jpg"),
    imageBg: require("./../images/games/slide6b.webp"),
    title: 'Black mirror'
  }
];

class Index extends Component {

  componentDidMount() {
    console.log("Index ===> ", this.props)
  }
  render() {
    return (
      <>
        <Navbar />

        <Banner />

        <NetFlixSlider>
          {movies.map(movie => (
            <NetFlixSlider.Item movie={movie} key={movie.id}>item1</NetFlixSlider.Item>
          ))}
        </NetFlixSlider>

        <Subscribe />

        <Footer />
      </>
    );
  }
}

export default connect(
  null, null
)(Index);
