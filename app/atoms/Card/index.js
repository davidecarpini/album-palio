import React, { Component } from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import images from "./images";
import styles from "./styles";
class Card extends Component {
  render() {
    const { onClick, number, badge, image } = this.props;
    const imageStyle = {
      ...styles.image,
      opacity: badge === 0 ? 0.5 : 1
    };
    return (
      <TouchableOpacity style={styles.touchable} onPress={onClick}>
        <ImageBackground
          imageStyle={imageStyle}
          style={styles.imageContainer}
          source={images[image]}
        >
          <Text style={styles.number}>{number}</Text>
          {badge && <Text style={styles.badge}>{badge}</Text>}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

Card.defaultProps = {
  onClick: () => console.log("clicked!")
};

export default Card;
