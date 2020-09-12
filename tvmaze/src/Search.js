import React from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import Sort from './Sort';




class Search extends React.Component {
    constructor() {
        super()
        this.state ={
            valueInput: "",
            query:"",
            resultDisplay: false, // is the view displaying results
            sort:"default"
        }
    }

//changes input to be whatever user inputs
    inputChangeHandler= (e) =>{
        this.setState({
                        valueInput: e.target.value
                    })
    }
//onclick event to send whatever that is in the input box to query for movies
    onClickHandler=(event)=> {
                let input = document.getElementById("input").value
                console.log(input)
                if(input.length > 1 && input.length < 200){
                    this.setState((prevState)=>({
                resultDisplay: true,
                query: input,
                valueInput: ""
            }))
                } else {
                    alert("Please enter more than 1 character and less than 200")
                }}

    //handle click for back to search page
    backToSearchClickHandler = () => {
        this.setState({valueInput: "",
            query:"",resultDisplay: false,sort:"default"})
    }

     //on change handler for select SORT

onChangeSort = (event) =>{
    let filter = event.target.value;
    this.setState({sort:filter})
}

    render(){
        if(!this.state.resultDisplay){
        return (
            <div>
                <SearchBar onChange={this.inputChangeHandler} onClick ={this.onClickHandler} value={this.state.valueInput} />
            </div>)

        }

        return (
            <div>
                <button onClick ={this.backToSearchClickHandler} > Search Again </button>
                <Sort onChange={this.onChangeSort} optionChoice={this.state.sort}/>
                <Results query={this.state.query} sort={this.state.sort}/>
            </div>)



    }
}

export default Search;