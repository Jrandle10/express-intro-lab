const favteams = [
  {text: 'Philadelphia Eagles', type: 'NFL', _id: 215255},
  {text: 'Philadlephia 76ers', type: 'NBA', _id: 215267},
  {text: 'Colorado Rockies', type: 'MLB', _id:303720},
]



const find = (conditions, callback) => {
  try {
    // try the code here
    // make sure that conditons is an object
    if (!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object")
    }
    // if the object is empty, return all favteams
    if(Object.keys(conditions).length === 0) {
      return callback(null, favteams)
    }

  } catch (error) {
    // if there are errors, run this code
    console.log(error)
    callback(error, [])
  }
}


export {
  find
}