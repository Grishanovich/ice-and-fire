import React, { Component } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import RamService from "../../services/ramService";
import './charCard.css'


// ramService = new RamService()

// state = {
//     char: {}
// }

// componentDidMount() {
//     this.updateChar()
// }

// onCharLoaded = (char) => {
//     this.setState({ char })
// }

// updateChar() {

//     const id = Math.floor(Math.random() * 826 + 1)

//     this.ramService.getCharacter(id)
//         .then(this.onCharLoaded)
// }

export const CharCard = (props) => {
    return (
        <>
            <Card>
                <CardImg
                    alt="image"
                    src={props.image}
                    top
                    width="100%"
                    className="charCard"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        <span className="span__circle">
                            {/* <FaCircle className={status} /> */}
                            {props.status}-{props.gender}
                        </span>
                    </CardSubtitle>
                    <CardText>
                        <span className="text-gray">Last known location:</span> {props.location}
                    </CardText>
                    <CardText>
                        <span className="text-gray">Species:</span> {props.species}
                    </CardText>
                    <CardText>
                        <span className="text-gray">Type:</span> {props.type}
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}


