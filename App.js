import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component{
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"red"} poster={require("./img/doctor-sleep.jpg")} />
          <Movie title={"midway"} year={2019} icon_name={"person-rifle"} icon_color={"red"} poster={require("./img/midway.jpg")} />
          <Movie title={"midway"} year={2019} icon_name={"water"} icon_color={"red"} poster={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM80rW1WI9XwnKfJuLCf8YlLwbQSvavcGPTbNNFY0MfZWPrOg8LMTce7Ml6zAPxIqbPTff&s=10"}} />
        </ScrollView>
    )
  }
};

export default AllMovies;