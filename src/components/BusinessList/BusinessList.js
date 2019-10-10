import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// BusinessList component containing a list of Business components
class BusinessList extends React.Component {
    render(){
        return (
            <div className ="BusinessList">
                {
                    // returns a list of Business objects based on array 
                    // from App 
                    this.props.businesses.map(business => {
                        return <Business key={business.id} business={business} />;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;