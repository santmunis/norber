import styled from 'styled-components';
import { IContainerImg } from './interfaces/IContainerImg';
import { IContainerProps } from './interfaces/IContainerProps';

export const Container = styled.div<IContainerProps>`
    background-color: ${(props) => props.color || 'var(--primary-color)'} ;
    height: 100%;
    box-sizing: border-box;
    padding: 5px 15px;
    gap:25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    width: ${(props) => props.width || '100vw'} ;
    font-size: 14px;
    font-weight: 600;
    
    @media (max-width: 820px) {
       padding: 0;
       gap: 10px;
       font-size: 10px;
       justify-content: center;
  }
`;

export const ImgContainer = styled.img<IContainerImg>`
    height: ${(props) => props.size || '30px'};
    width: ${(props) => props.size || '30px'};
    border-radius: 50%;

    @media (max-width: 820px) {
        height:  30px;
        width: 30px;
  }
`;


