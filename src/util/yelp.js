const apiKey = 'for british eyes only'

const Yelp = {}

const search = (term,location,sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers:{
        Authorization: `Bearer ${apiKey}`}
      }
  ).then(response => {
    return response.json()
  }).then(jsonResponse => {
    if (jsonResponse.businesses) {

    } else {
      // Catch statements go here (ish)
    }
  });
}

export default Yelp;
