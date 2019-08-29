import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';


class MovieTab extends Component {
    render() {
        return (
            <div>
                <Col xs={12} sm={6} lg={4}>
                    <div>
                        <Image src={this.props.img} rounded />
                        <h5>{this.props.movie}</h5>

                    </div>
                </Col>
            </div>
        );
    }
}


export default MovieTab;