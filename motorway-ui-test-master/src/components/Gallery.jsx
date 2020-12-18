import React, { Component } from 'react';

import Form from './Form';

export class Gallery extends Component {
  state = { images: this.props.images, overlay: null };

  componentDidMount() {
    console.clear();
  }

  handleViewImage = (event) => {
    this.setState({ overlay: event.target.id }); // just because ID and URL code are the same
  };

  handleCloseOverlay = (event) => {
    this.setState({ overlay: null });
  };

  handleCloseZoom = (event) => {
    event.stopPropagation();
    window.open('https://www.r5.ro/Motorway/car-images/' + this.state.overlay + '.jpg', '_blank');
  };

  render() {
    const images = this.props.images;

    return (
      <>
        <section className='gallery'>
          <h1>Our cars</h1>
          <ul className={'display' + (this.state.overlay ? ' blur' : '')}>
            {images &&
              images.map((img) => (
                <li key={img.id}>
                  <div
                    className='car'
                    id={img.id}
                    style={{
                      backgroundImage: 'url(' + img.url + '.small)',
                    }}
                    onClick={this.handleViewImage}>
                    <img className='hero' src={img.user.profile_image} alt={img.alt_description} />
                  </div>
                </li>
              ))}
          </ul>

          <div className={'overlay' + (this.state.overlay ? ' open' : '')} onClick={this.handleCloseOverlay}>
            <div className='loading'>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

            {images && this.state.overlay && <img src={'/car-images/' + this.state.overlay} alt={images[0].alt_description} />}
            <div className='zoom' onClick={this.handleCloseZoom}></div>
          </div>
        </section>
        <section className={'form' + (this.state.overlay ? ' blur' : '')}>
          <h2>Tell us about yourself:</h2>
          <Form />
        </section>
      </>
    );
  }
}

export default Gallery;
