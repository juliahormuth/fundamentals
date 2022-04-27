const person = {
    name: 'julia',
    age: 22,

    speak() {
        console.log(`Im ${this.age} years old.`)
    },

    //method when is into the object

    incrementAge() {
        this.age++
    }
}

person.speak()
person.incrementAge()
person.speak()