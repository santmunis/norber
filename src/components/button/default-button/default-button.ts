import styled from 'styled-components';
import { IButton } from './../interfaces/IButton';

export const DefaultButton = styled.button<IButton>`
    background-color: ${(props) => props.bgColor || 'var(--secondary-color)'} ;
    height: 40px;
    width: ${(props) => props.size || '30px'} ;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.fontSize || '12px'} ;
    color: ${(props) => props.color || '#ffffff'} ;;
`;