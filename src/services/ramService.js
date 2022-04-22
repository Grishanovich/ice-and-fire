export default class RamService {
    constructor() {
        this._apiBase = 'https://rickandmortyapi.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`could not fetch ${url}`)
        }
        return await res.json()
    }

    getAllCharacters = async (page) => {
        const res = await this.getResource(`/character/?page=${page}`)
        return (Object.values(res)[1]);
    }

    getPageInfo = async () => {
        const res = await this.getResource(`/character`)
        return (Object.values(res)[0]);
    }

    async getCharacter(id) {
        const res = await this.getResource(`/character/${id}`)
        return this._transformCharacter(res)
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            status: char.status,
            image: char.image,
            species: char.species,
            type: char.type || "sorry no data :(",
            location: char.location.name
        }
    }
}