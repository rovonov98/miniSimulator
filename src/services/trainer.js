import randomNumber from './randomNumber'

export default class Trainer {
    constructor() {
        this.state = 'off'
        this.number = null
        this.result = false
        this.start = function(digit, speed) {
            this.number = randomNumber(digit)
            this.state = 'num showing'
            setTimeout(() => {
                this.state = 'num guessing'
            }, speed * 1000)
        }
        this.compareResults = function(result) {
            this.state = 'result'
            if (this.number == result) this.result = true
        }
    }
}