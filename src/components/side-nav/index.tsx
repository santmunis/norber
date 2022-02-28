import React from 'react';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { Button, Dropdown } from 'react-bootstrap';


export default function SideNav() {
    return (
        <>
            <ul className='content-wrapper'>
                <li className='content-item-wrapper'>
                    <div className='content-item'>
                        Pcr
                    </div>

                </li>
                <li className='content-item-wrapper'>
                    <div className='content-item'>
                        <FontAwesomeIcon icon={faChartArea} />
                    </div>
                </li>
                <li className='content-item-wrapper'>
                    <div className='content-item'>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                </li>
                <li className='content-item-wrapper'>
                    <div className='content-item'>
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                </li>
            </ul>
        </>
    )
}