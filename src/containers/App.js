import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


const MapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // };
    render() {

        const { searchfield, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (

            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? <h1 className='tc'>Loading...</h1> :

                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div >
        );
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);