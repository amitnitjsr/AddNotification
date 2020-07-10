import React, { Component } from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import './Home.css';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    deleteHandler = (id) => {
        this.props.delete(id);
    }

    render() {
        return (
            <div>
                <Card className="parent">
                    {this.props.list ?
                        this.props.list.map((val) => {
                            return (
                                <CardBody className="card-style" key={val.id}>
                                    <CardText>
                                        {val.data}
                                    </CardText>
                                    <Button className="button-style" onClick={() => this.deleteHandler(val.id)}>Delete</Button>
                                </CardBody>
                            )
                        })
                        : null}
                </Card>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => { dispatch({ type: "delete", payload: { 'id': id } }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);