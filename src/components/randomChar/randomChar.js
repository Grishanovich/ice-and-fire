import React, { Component } from "react";
import { CharCard } from "../charCard/charCard";
import RamService from "../../services/ramService";

export default class RandomChar extends Component {

    ramService = new RamService()

    state = {
        char: {}
    }

    componentDidMount() {
        this.updateChar()

    }

    updateChar() {
        const id = Math.floor(Math.random() * 826 + 1)

        this.ramService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    onCharLoaded = (char) => {
        this.setState({ char })
    }

    render() {

        const { char: { name, image, gender, status, location, species, type } } = this.state

        return (
            <>
                <CharCard
                    name={name}
                    image={image}
                    gender={gender}
                    status={status}
                    location={location}
                    species={species}
                    type={type}
                />
            </>
        )
    }
}