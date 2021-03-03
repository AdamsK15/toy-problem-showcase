import React, { Component } from "react";

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filterNames: [],
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterNames(userInput) {

    }


    render() {
        return (
            <div className='puzzleBox FilterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' />
                <button className='confirmationButton' onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filterNames, null, 10)}</span>

            </div>
        )
    }
}

export default FilterString;