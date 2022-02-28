import React, { useEffect } from 'react';
import * as menu from './style-menu';
import { RoundButton } from './../button/round-button/round-button';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Button, Dropdown } from 'react-bootstrap';

import { ApplicationState } from '../../store';
import * as UserAction from '../../store/ducks/user/action';
import { UserState } from './../../store/ducks/user/types';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const logo = require('./../../assets/LogoNorberCor.png');
const brasilIcon = require('./../../assets/icons8-brazil-48.png');


interface StateProps {
    user: UserState

}
interface DispatchProps {
    actions: {
        getLoggedUser(id: number): void
    }
}

interface OwnProps {
    color: string
}

type Props = StateProps & OwnProps & DispatchProps;

function Menu(props: Props) {

    useEffect(() => {
        const { actions } = props;
        actions.getLoggedUser(1);
    }, []);

    return (
        <>
            <menu.Container color={props.color}>
                <div className="logo">
                    <img src={logo} width="130px" height="auto" alt="Logo da loja" />
                </div>

                <menu.Container color={props.color} width="auto">
                    <div className='div-flex'>
                        <RoundButton>
                            <FontAwesomeIcon icon={faHouseChimney} />
                        </RoundButton>
                        <RoundButton>
                            <FontAwesomeIcon icon={faClock} />
                        </RoundButton>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUsers} className="section-mananger-icon" />
                        <span>Mananger</span>
                    </div>
                    <div>
                        <Dropdown>
                            <Button className="btn-transparent" >
                                <menu.ImgContainer src={brasilIcon} alt="icon" ></menu.ImgContainer>
                            </Button>
                            <Dropdown.Toggle split className="btn-transparent" />
                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item eventKey="1">PT</Dropdown.Item>
                                <Dropdown.Item eventKey="2">ES</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    ES
                                </Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='div-flex div-center'>
                        <span>{props.user.data.name}</span>
                        <menu.ImgContainer src={brasilIcon} alt="icon" size="42px"></menu.ImgContainer>
                    </div>
                </menu.Container>
            </menu.Container>
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(UserAction, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu)