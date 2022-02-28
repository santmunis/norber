import styled from 'styled-components';
import { IScrollContainer } from './interfaces/IScrollContainer';

export const ScrollContainer = styled.div<IScrollContainer>`
    background-color: ${(props) => props.color || 'transparent'} ;
    height: ${(props) => props.height || '100%'} ;
    overflow: scroll;
    overflow-x:hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    width: 100%;
    font-size: 14px;
    font-weight: 600;

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #f4f4f4;
    border:5px solid #f4f4f4;
    border-radius: 15px;
}
::-webkit-scrollbar
{
	width: 5px;
	 background-color: #f4f4f4;;
}
::-webkit-scrollbar-thumb
{
	background-color: #e8e8e8;
    border-radius: 15px;
}
`;