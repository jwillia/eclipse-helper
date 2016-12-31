import React from 'react'
import { Link } from 'react-router';
export default function menu(props) {
  return <div>
    Menu
    <Link to='/resources'>Resources</Link>
    <Link to='/research'>Research</Link>
    {props.children}
  </div>
}