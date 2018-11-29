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
                    <p> {this.props.business.address} <br/>
                        {this.props.business.city}  <br/>
                        {this.props.business.state} <br/>
                        {this.props.business.zipCode}
                    </p>
                </div>
                <div className="Business-reviews">
                <h3>{this.props.business.category}</h3>
                <h3 className="rating">{this.props.business.rating}</h3>
                <p>{this.props.business.reviewCount}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Business;

