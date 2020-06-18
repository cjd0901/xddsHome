import React, { Component } from 'react'
import HelloWorld from '../components/HelloWord'
import './index.scss'

export default class Root extends Component {
    render() {
        return (
            <div className='_'>
                <HelloWorld></HelloWorld>
            </div>
        )
    }
}
