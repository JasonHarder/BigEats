/* The Purpose of the business component is to represent how a business
will be formatted and styled in the app. */
import React from 'react'
import ReactDOM from 'react-dom'
import './Business.css'



class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt={this.props.business.name}/>
                </div>
            <h2>{this.props.business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p> street address:{this.props.business.address}
                        city: {this.props.business.city}
                        state:{this.props.business.state}
                        zip/postal code{this.props.business.zipCode}
                    </p>
                </div>
                <div className="Business-reviews">
                <h3>{this.props.business.category}</h3>
                <h2 className="rating">Rating {this.props.business.rating}</h2>
                <p>Review Count {this.props.business.reviewCount}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Business;

