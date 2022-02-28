import React from 'react';
import { IOwnProps } from './interfaces/IOwnProps';

import './style.css';



export default function Title(props: IOwnProps) {
    return (
        <>
            <header className="content-header-title">
                {props.prefix && React.cloneElement(props.prefix)}
                {props.title}
                {props.suffix && React.cloneElement(props.suffix)}
            </header>
        </>
    )
}