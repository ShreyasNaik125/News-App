import getIP from "./getIp.js"

const getArea = async() => {
    const ip = await getIP()

    const promise = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=f6528a6c2dcf4f64aa4cabf5019ef4e4&ip=${ip}`)
    var data = await promise.json()

    return data
}

const getLocation = async() => {
    const promise = await getArea()
    return [promise.city,promise.country_name]
}

export {getArea,getLocation}