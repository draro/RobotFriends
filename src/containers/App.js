import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield
    }
}

const MapDispatchToProps = (dispatch) => {
    return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // };
    render() {
        const { robots } = this.state;
        const { searchfield, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1 className='tc'>Loading...</h1> :
            (

                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div >
            );
    };
}

export default connect(mapStateToProps, MapDispatchToProps)(App);