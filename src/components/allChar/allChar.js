import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import RamService from "../../services/ramService";
import { CharCard } from "../charCard/charCard";

import './allChar.css'

export default class AllChar extends Component {

    ramService = new RamService()

    state = {
        charList: [],
        pageInfo: [],
        page: 1
    }

    componentDidMount = async () => {
        await this.getPages()
        this.ramService.getAllCharacters(this.state.page)
            .then((charList) => {
                this.setState({ charList })
            })
    }


    getPages = async () => {
        await this.ramService.getPageInfo()
            .then((pages) => {
                this.setState({
                    pageInfo: pages
                })
            })
    }

    nextPage = async () => {

        if (this.state.page > 42) {
            this.setState({ page: 42 })
        } else {
            await this.setState({
                page: this.state.page + 1
            })
        }

        this.ramService.getAllCharacters(this.state.page)
            .then((charList) => {
                this.setState({ charList })
            })
    }

    prevPage = async () => {

        if (this.state.page <= 1) {
            this.setState({ page: 1 })
        } else {
            await this.setState({
                page: this.state.page - 1
            })
        }

        this.ramService.getAllCharacters(this.state.page)
            .then((charList) => {
                this.setState({ charList })
            })
    }

    changePage(e) {
        console.log(e.target);
    }

    renderItem(arr) {
        return arr.map((item) => {
            return (
                <Card
                    key={item.id}
                >
                    <CardImg
                        alt="image"
                        src={item.image}
                        top
                        width="100%"
                        className="charCard"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <span className="span__circle">
                                {/* <FaCircle className={item.status} /> */}
                                {item.status}-{item.gender}
                            </span>
                        </CardSubtitle>
                        <CardText>
                            <span className="text-gray">Last known location:</span> {item.location.name}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Species:</span> {item.species}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Type:</span> {item.type || 'sorry no data :('}
                        </CardText>
                    </CardBody>
                </Card>
            )
        })
    }

   

    render() {

        const { charList } = this.state

        const items = this.renderItem(charList)


        const style = {
            height: '3px',
            color: 'black'
        }

        return (
            <>
                <div className="cards">
                    {items}
                </div>
                <hr style={style} />

                <div className="btns">
                    <button type="button" className="btn btn-primary" onClick={this.prevPage} >Prev</button>


                    <button type="button" className="btn btn-primary" onClick={this.nextPage}>Next</button>
                </div>
            </>

        )
    }
}