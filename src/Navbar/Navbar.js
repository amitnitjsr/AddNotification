import React from 'react';
import { Navbar, Nav } from 'reactstrap';
import { connect } from 'react-redux';

const data = `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has ?`



const Header = (props) => {

    const AddHandler = () => {
        props.Adddata(data);
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <span>Notification {localStorage.getItem('count')}</span>
                </Nav>
                <button onClick={() => AddHandler()}>Add</button>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Adddata: (data) => { dispatch({ type: "Adddata", payload: { 'data': data } }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
