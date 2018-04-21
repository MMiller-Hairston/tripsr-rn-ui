import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const applyStyle = style => {
  switch (style) {
    case 'primary':
      return styles.buttonPrimary;
    case 'facebook':
      return styles.facebook;
    case 'google':
      return styles.google;
    default:
      return styles.button;
  }
};

const Button = ({ text, onPress, type }) => {
  return (
    <TouchableOpacity onPress={onPress} style={applyStyle(type)}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = {
  colorWhite: {
    color: '#fff',
  },
  buttonPrimary: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#62C6BB',
    borderRadius: 3,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    borderColor: '#fff',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 3,
  },
  facebook: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 3,
  },
  google: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#df4a32',
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowRadius: 0.4,
    textShadowOffset: { width: 0, height: 0.25 },
  },
};

export default Button;
