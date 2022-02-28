import React, { useEffect, useState } from "react";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFilter, faQrcode, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Title from "../../components/title";
import * as div from '../../components/div/default-container/default-container';
import { ScrollContainer } from '../../components/div/scroll-container/scroll-container';
import { RoundButton } from "../../components/button/round-button/round-button";
import SearchListItem from "../../components/search-list-item/index";

import { Form, FormControl, InputGroup } from "react-bootstrap";
import PieCharts from "../../components/chart/pie-chart";
import { DefaultButton } from "../../components/button/default-button/default-button";

import { ApplicationState } from '../../store';

import * as UserAction from '../../store/ducks/user/action';
import * as PointsAction from '../../store/ducks/points/action';

import { UserState } from './../../store/ducks/user/types';
import { PointsState } from "../../store/ducks/points/types";

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';



interface StateProps {
    user: UserState,
    points: PointsState

}
interface DispatchProps {
    actions: {
        loadRequest(): void
        getLoggedUser(id: number): void
    }
}


type Props = StateProps & DispatchProps;

const Home = (props: Props) => {
    const containerWithHeader: string = "30%";
    const week = ["Seg", "Terç", "Qua", "Qui", "Sex", "Sáb", "Dom"]
    const today = new Date();

    const getNumberEntity = (number: number) => {
        return (<>
            <b>{number}</b>
        </>)
    }

    const getHours = () => {
        const today = new Date()
        const seconds = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
        return `${today.getHours()}:${today.getMinutes()}:${seconds}`;
    }

    const [currentHour, setCurrentHour] = useState(getHours());
    useEffect(() => {
        setInterval(() => {
            setCurrentHour(getHours())
        }, 1)

    });

    useEffect(() => {
        const { actions } = props;
        actions.loadRequest();
        actions.getLoggedUser(1);
    }, []);



    return (
        <div className="home-content-wrapper">
            <header className="flex-row">
                <div className="user-login-info">
                    <h3>Bem Vindo(a), <span>{props.user.data.name}</span></h3>
                    <span className="subTitle">Último acesso em 12/11/2021 às 16:23</span>
                </div>
                <div className="header-content flex-row flex-end">
                    <div.Container direction="column" width={containerWithHeader}>
                        <Title title="Departamento" suffix={<FontAwesomeIcon icon={faQrcode} />} />
                        <Form.Select size="sm" className="custom-select">
                            <option>Small select</option>
                        </Form.Select>
                    </div.Container>
                    <div.Container direction="column" width={containerWithHeader}>
                        <Title title="Período" suffix={<FontAwesomeIcon icon={faCalendar} />} />
                        <div className="period-content">
                            <span>
                                20/12/2021 a 23/12/2022
                            </span>
                            <span>
                                16:53
                            </span>
                            <RoundButton size="20px" bgColor="#edf1f7" color="#0070d2" >
                                <FontAwesomeIcon icon={faLock} />
                            </RoundButton>
                        </div>
                    </div.Container>
                </div>
            </header>
            <section className="flex-row">
                <div className="team-content">
                    <div className="team-content-my-team">
                        Minha Equipe {'    '}
                        <FontAwesomeIcon icon={faCalendar} />{'   '}
                        {today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + week[today.getDay() - 1]}
                    </div>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                    <div.Container justify="center" direction="column" >
                        <Title prefix={<FontAwesomeIcon icon={faLock} />} title="Departamento" suffix={getNumberEntity(10)} />
                    </div.Container>
                </div>
                <div.Container direction="column" width={"50%"}>
                    <div className="search">
                        <InputGroup className="mb-3" size="sm">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                            <FormControl
                                placeholder="Pesquise por nome ou matricula"
                                aria-label="Pesquise por nome ou matricula"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <RoundButton size="30px" bgColor="#efefef" color="#0070d2" >
                            <FontAwesomeIcon icon={faFilter} />
                        </RoundButton>
                    </div>
                    <ScrollContainer>
                        {props.points.data && props.points.data.map((map) => (
                            <SearchListItem name={map.name} points={map.points} post={map.post} />
                        ))}
                    </ScrollContainer>

                </div.Container>
                <div.Container direction="column" width="32%">
                    <Title title="Meu Ponto" suffix={<FontAwesomeIcon icon={faSuitcase} />} />
                    <div className="my-point-wrapper">
                        <p className="user-name">{props.user.data.name}</p>
                        <p className="position">{props.user.data.position}</p>
                        <p className="point-date">12 de novembro de 2021 - Sex</p>
                        <p className="point-hours">{currentHour}</p>
                        <DefaultButton size="170px">Meu Ponto</DefaultButton>
                        <p className="appointments-today">Marcações realizadas <b>Hoje</b></p>
                        <div className="appointments-wrapper">
                            {props?.user?.data?.points && props?.user?.data?.points.map((map) => (
                                <div>
                                    <FontAwesomeIcon icon={faDesktop} />
                                    {map}
                                </div>
                            ))}
                        </div>
                    </div>
                </div.Container>
            </section>
            <section>
                <div.Container direction="column" width={"34%"} justify="flex-start">
                    <Title title="Saldo Banco de horas" />
                    <div className="content-chart">
                        <PieCharts />
                        <p className="subTilte">Proximo fechamento em nov/2021</p>

                        <div className="legend">
                            <p><b>3024h</b></p>
                            <p><b>Banco padrão</b></p>
                        </div>
                    </div>
                </div.Container>
                <div.Container direction="column" width={"34%"} justify="flex-start">
                    <Title title="Ocorrência de horas extras" />
                    <div className="content-chart ">
                        <PieCharts />
                        <div className="legend aling-chart">
                            <p><b>2024h</b></p>
                        </div>
                    </div>
                </div.Container>
                <div.Container direction="column" width={"32%"}>
                    <Title title="Top 5" />
                    <div className="search">
                        <Form.Select size="sm">
                            <option>Banco de Horas</option>
                        </Form.Select>
                        <DefaultButton size="30px" bgColor="#efefef" color="#0070d2" >
                            <FontAwesomeIcon icon={faFilter} />
                        </DefaultButton>
                    </div>
                    <ScrollContainer>
                        {props.points.data.map((map) => (
                            <SearchListItem name={map.name} post={map.post} customSuffixItem={<><p className="customHour">{map.hours}</p></>} />
                        ))}
                    </ScrollContainer>
                </div.Container>
            </section>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    user: state.user,
    points: state.points
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, UserAction, PointsAction), dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
