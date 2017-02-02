// Object -> List<List>
module.exports = (ob) => Object.keys(ob).map(key => [key, ob[key]]);