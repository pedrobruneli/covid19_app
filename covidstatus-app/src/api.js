import axios from "../node_modules/axios/index"

const path = 'https://coronavirus-19-api.herokuapp.com/countries'

function getCountry(country) {
    return axios.get(`${path}/${country}`)
        .then((response) => response.data)
}

export default {
    getCountry
}