import styled from 'styled-components';
import { IButton } from '../interfaces/IButton';

export const RoundButton = styled.button<IButton>`
    background-color: ${(props) => props.bgColor || 'var(--secondary-color)'} ;
    height: ${(props) => props.size || '30px'} ;;
    width: ${(props) => props.size || '30px'} ;;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.fontSize || '12px'} ;
    color: ${(props) => props.color || '#ffffff'} ;;
`;