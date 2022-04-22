import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import RamService from "../../../services/ramService";
import { CharCard } from "../../charCard/charCard";

export default class AllChar extends Component {

    ramService = new RamService()

    state = {
        charList: [],
        pageInfo: []
    }

    componentDidMount() {
        this.getPages()
    }

    getPages() {
        this.ramService.getPageInfo()
            .then((pages) => {
                const page = (pages.next.slice(47));
                this.ramService.getAllCharacters(page)
                    .then((charList) => {
                        this.setState({ charList })
                    })
            })
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
                // <CharCard
                //     key={i}
                //     name={item.name}
                //     image={item.image}
                //     gender={item.gender}
                //     status={item.status}
                //     location={item.location}
                //     species={item.species}
                //     type={item.type}

                // />
            )
        })
    }

    render() {

        const { charList } = this.state

        const items = this.renderItem(charList)

        return (
            <>
                {items}
            </>
        )
    }
}