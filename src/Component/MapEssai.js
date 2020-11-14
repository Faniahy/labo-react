import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapEssai extends Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDoztffu7d2-EvbzccMZ04BFFDZWvt_QCI'
  })(MapEssai);
  
