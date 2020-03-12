import React from 'react';
import '../components/Buttons.css';

export default function Button(props) {
  return <button className={props.className || 'button'} {...props} />;
}
