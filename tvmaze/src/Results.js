import React from 'react';
import IndivResult from './IndivResult'

export default class Results extends React.Component {
    constructor(props){
        //mounting
        super(props)
        console.log("----inside constructor")

        this.state = {
            query:"", //input passed down by props
            searchResult:[], //result from API
            html:[],
            result:[]
        }
    }

//set state with props from parent: SEARCH
    static getDerivedStateFromProps(props,state) {
        //mounting
        return { query : props.query}
    }


//when state is changed, FETCH results from aPI
//side effects ie: HTTP requests are allowed here
    componentDidMount() {
        //mounting
        if(this.props.query) {

        fetch("http://api.tvmaze.com/search/shows?q="+ this.state.query)
        .then(res => res.json())
        .then(res => {
            if(res.length < 1){
                this.setState({html: 'No matching search results. try another term?'})
            } else {
                console.log(res)
                let formattedResult = this.format(res);
                this.setState({result: res, html:formattedResult})
            }
        })
        .catch(error => {
        console.log("error happened", error.message)
    });
    }
        console.log("----inside componentDidMount")
    }


//for when we press back to search
    componentWillUnmount() {
        console.log("----inside componentWillUnmount")

    }
//helper functions

//take the res.json and convert into nice HTML
format(array) {
    return array.map((item,index)=>{
        let name = item.show.name;
        let url = item.show.url;
        let rating = item.show.rating.average;
        let img = item.show.image ? item.show.image.medium : "image does not exist";
        return <IndivResult name={name} img={img} rating={rating} url ={url} key={index} />
    })
}





    render(){
        console.log("----insider render")

        return (
            <>
                <h1>You have entered search term {this.state.query}</h1>
                <br/>
                <div className="resultList" >
                {this.state.html}
                </div>

            </>
            )
    }
}