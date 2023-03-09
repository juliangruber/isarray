// Node has been supporting this from day 1

// Browsers have been supporting Array.isArray
// for longer than even strict mode

// Additionally, every single even remotely
// popular tool capable of bringing node
// modules to the web do not even target
// browser versions older than Array.isArray
// In fact, most of them use `Array.isArray`

// Finally, Array.isArray and JSON.stringify
// are the only ways to reliably check
// if an object is internally an array
// The previous solution checked if the given
// object has a string tag of "Array", which
// may be true for non-array objects

module.exports = Array.isArray
