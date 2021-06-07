export default function(digit) {
    let result = (Math.floor(Math.random() * 9) + 1).toString()
    for (let i = 1; i < digit; i++) {
        result+= Math.floor(Math.random() * 10)
    }
    return parseInt(result)
}