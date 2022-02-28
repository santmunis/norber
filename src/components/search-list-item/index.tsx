import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ISearchListItem } from './interfaces/ISearchListItem';

import './style.css';



export default function SearchListItem(props: ISearchListItem) {

    const GetInitialName = (name: string) => {
        let names = name.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    return (
        <>
            <div className="search-list-item-content-wrapper">
                <div>
                    <div className="initials-wrapper">
                        {GetInitialName(props.name)}
                    </div>
                    <div className="items-info-wrapper">
                        <p>{props.name}</p>
                        <p>{props.post}</p>
                        {props.points && <p><span><FontAwesomeIcon icon={faClock} /></span>{props.points}</p>}
                    </div>
                </div>
                {
                    props.customSuffixItem
                        ? React.cloneElement(props.customSuffixItem)
                        : <div className="icon-name">
                            <FontAwesomeIcon className='bgGrey' icon={faPhone} />
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                }

            </div>
        </>
    )
}