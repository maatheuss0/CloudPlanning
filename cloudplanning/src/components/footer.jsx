import './App.css';
import { Link } from 'react-router-dom'
import { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="">
                    <span>© 2022 Copyright - Programador</span>
                </footer>
            </div>
        )
    }
}