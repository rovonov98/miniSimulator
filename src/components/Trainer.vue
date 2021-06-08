<template>
    <div class="wrapper">
        <div class="trainer">
            <div class="options">
                <div class="speed">
                    <span>Время показа:</span>
                    <select v-model="speed">
                        <option 
                            v-for="(option, index) in speedOptions" 
                            :key="index" 
                            :value="option"
                        >
                            {{ option }}
                        </option>
                    </select>
                </div>
                <div class="digit">
                    <span>Размер числа:</span>
                    <select v-model="digit">
                        <option 
                            v-for="(option, index) in digitOptions" 
                            :key="index" 
                            :value="option"
                        >
                            {{ option }}
                        </option>
                    </select>
                </div>
                <button @click="start(digit, speed)">
                    {{ this.trainer.state || !this.trainer.state === 'off' ? 'Restart' : 'Start' }}
                </button>
            </div>
            <div 
                v-show="trainer.state === 'num showing'"
                class="output" 
            >
                {{ this.trainer.number }}
            </div>
            <div
                v-show="trainer.state === 'num guessing'"
                class="guessing"
            >
                <form @submit.prevent="compare(input)" class="guessing-form">
                    <input type="text" v-model="input">
                    <button value="submit">Сompare</button>
                </form>
            </div>
            <div
                v-if="trainer.state === 'result'"
                class="result" 
            >
                {{ this.trainer.result ? 'Правильно' : 'Неправильно'}}
            </div>
        </div>
    </div>
</template>

<script>
import Trainer from './../services/trainer'

export default {
    data() {
        return {
            trainer: {},
            digit: 2,
            digitOptions: [],
            speed: 0.2,
            speedOptions: [],
            input: null,
            result: false
        }
    },
    methods: {
        start(digit, speed) {
            this.trainer = new Trainer()
            this.trainer.start(digit, speed)
        },
        compare(input) {
            this.trainer.compareResults(input)
        },
        addOptions(digitOpt, speedOpt) {
            for (let i = 2; i <= digitOpt; i++) {
                this.digitOptions.push(i)
            }
            for (let i = 200; i <= speedOpt * 1000; i+=100) {
                this.speedOptions.push(i/1000)
            }
        }
    },
    mounted() {
        this.addOptions(5, 2)
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.trainer {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
        padding: .25rem .5rem;
    }
}
.options {
    display: flex;
    @media(max-width: 520px) {
        flex-direction: column;
    }
}
.guessing-form {
    display: flex;
    align-items: center;
    @media(max-width: 520px) {
        flex-direction: column;
    }
}
</style>