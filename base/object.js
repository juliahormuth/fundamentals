const person = {
    name: 'julia',
    age: 22,

    speak() {
        console.log(`Im ${this.age} years old.`)
    },

    incrementAge() {
        this.age++
    }
}

person.speak()
person.incrementAge()
person.speak()