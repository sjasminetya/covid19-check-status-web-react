import React, { Component } from 'react'
import styles from './Footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-2 bg-dark text-white">
                    <h3 className={styles['text-footer']}>Stay safe, stay healty &hearts;</h3>
                </footer>
            </div>
        )
    }
}
