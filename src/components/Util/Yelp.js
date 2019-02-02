const yelpApiKey=process.env.yelpApiKey

const yelp = {
  searchYelp(term,location,sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers:{Authorization: `Bearer ${yelpApiKey}`,
    },
  }).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(((business)=> {
        return {
          name: business.name,
          id: business.id,
          imageSrc: business.image_url,
          address: business.location.address1, /* (in locations) */
          city: business.location.city, /* */
          state: business.location.state,
          zipcode: business.location.zipCode,
          category: business.categories.title,
          rating: business.rating,
          reviewCount: business.review_count
        };
      }));
    }
  })
  }
}
export default yelp
