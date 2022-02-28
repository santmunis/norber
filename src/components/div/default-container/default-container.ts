import styled from 'styled-components';
import { IDefaultContainer } from './IDefaultContainer';

export const Container = styled.div<IDefaultContainer>`
    background-color: ${(props) => props.color || '#ffffff'} ;
    border-radius: ${(props) => props.borderRadius || '5px'} ;
    height: 100%;
    box-sizing: border-box;
    padding: 5px 15px;
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    align-items: center;
    justify-content: ${(props) => props.justify || 'space-between'};
    box-shadow: var(--box-shadow);
    color: #ffffff;
    width: ${(props) => props.width || 'auto'} ;
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 820px) {
        width: 100%;
  }
`;