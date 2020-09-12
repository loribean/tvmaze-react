import React from 'react';

export default class Results extends React.Component {
    constructor(props){
        //mounting
        super(props)
        console.log("----inside constructor")

        this.state = {
            query:"", //input passed down by props
            searchResult:[] //result from API
        }
    }

//set state with props from parent: SEARCH
    static getDerivedStateFromProps(props,state) {
        //mounting
        return { query : props.query}
    }

//dont touch this
    shouldComponentUpdate() {
        //updating
        //never touch or declare this
        console.log("----inside shouldComponentUpdate")
        return true
    }

//when state is changed, only when query is different
    componentDidMount() {
        //mounting
        console.log("----inside componentDidMount")

    }

     componentDidUpdate() {
        //Updating
        console.log("----inside componentDidUpdate")

    }

//for when we press back to search
    componentWillUnmount() {
        console.log("----inside componentWillUnmount")

    }






    render(){
        console.log("----insider render")

        return (
            <>
                <h1>You have entered search term {this.state.query}</h1>
                <br/>

            </>
            )
    }
}