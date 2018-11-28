const apiKey = 'ZTRh07pfpWfTysY_hVOXwPujDNbCN97dNOe22JSuXFrvmMgMMNREzzq5tja24ZLigioM08Sa8vt9XjLkJx2HQLFGFR7mBSvzyf-IWyBT5ux0QD1SNVrRXT8OQN31W3Yx'

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
        return jsonResponse.businesses.map((business,info) => {
         return { id: business.id,
                  imageSrc: business.image_url,
                  //
                  address: location.address1, /* (in locations) */
                  city: location.city, /* */
                  state: location.state,
                  zipcode: location.zipCode,
                  category: business.categories,
                  rating: business.rating,
                  reviewCount: business.review_count
// Probably have to further destructure the object to be sure.

                }

      })
    }
}
  );
}

export default Yelp;
