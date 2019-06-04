// const square = function(x) {
//     return x*x;
// }
// const square = (x) => x*x;

// console.log(square(3))

// const event = {
//     name: 'Lolapaluza',
//     printGuestList: function(){
//         console.log('guest list for '+this.name)
//     }
// }

const event = {
        name: 'Lolapaluza',
        guestList:['Mom','Dad','Adi'],
        printGuestList (){
            console.log('guest list for '+this.name)
            this.guestList.forEach((guest)=>{
                console.log(`${guest} is attending ${this.name}`)
            })
        }
    }
event.printGuestList()