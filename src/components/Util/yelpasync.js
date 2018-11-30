const apiKey = 'ZTRh07pfpWfTysY_hVOXwPujDNbCN97dNOe22JSuXFrvmMgMMNREzzq5tja24ZLigioM08Sa8vt9XjLkJx2HQLFGFR7mBSvzyf-IWyBT5ux0QD1SNVrRXT8OQN31W3Yx'

  async function searchYelp (term,location,sortBy) {
    let yelpRequest = new Promise (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers:{Authorization: `Bearer ${apiKey}`,
  }})

    let  jsonResponse = await yelpRequest.json
    try {
        if (jsonResponse.business) {
        return jsonResponse.businesses.map(((business)=> {
          return { // the following all show in console with an object console.log but not display on site.
            name: business.name,
            id: business.id,
            imageSrc: business.image_url, /*Works*/
            address: business.location.address1, /* Works */
            city: business.location.city, /* Works */
            state: business.location.state, /* Works*/
            zipcode: business.location.zipCode, /* doesn't show */
            category: business.categories.title,
            rating: business.rating, /* Works */
            reviewCount: business.review_count /*Works*/
        };
      }));
    }
    } catch {
      console.log('nuuu')
  }
}

export default searchYelp