// Modules (ES 6) (Encapsulated Code only share minimum)
// Spliting the codes in dfrnt files
// every file in node is a module
// will act as a module to 4-firstmodule



const sayHi = (name) =>{ // es6  syntax

    console.log(`Hello there ${name}`)

}
// alternate method
module.exports.alterante = "this is an alternate method of exporting objects"


module.exports = sayHi
// sayHi('susan')