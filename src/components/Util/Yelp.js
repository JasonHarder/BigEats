const apiKey = 'ZTRh07pfpWfTysY_hVOXwPujDNbCN97dNOe22JSuXFrvmMgMMNREzzq5tja24ZLigioM08Sa8vt9XjLkJx2HQLFGFR7mBSvzyf-IWyBT5ux0QD1SNVrRXT8OQN31W3Yx'
let async = require('async')

const getSearch = async = (term,location,sortBy) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {method: 'POST'} ,
  {headers:{Authorization: `Bearer ${apiKey}`}
}
).then(response => {
  try {
    if (response.business) {
      return console.log('success')
      //object goes here
    }
  } catch {
    console.log('FAILURE')
  }

})}

getSearch(apiKey) //remove this function call later


export default 'Yelp';
