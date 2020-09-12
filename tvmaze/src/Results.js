import React from 'react';
import IndivResult from './IndivResult';


export default class Results extends React.Component {
    constructor(props){
        //mounting
        super(props)
        console.log("----inside constructor")

        this.state = {
            query:"", //input passed down by props
            searchResult:[], //result from API
            html:[],
            result:[],
            sort:"default" //original api is sorted by this
        }
    }

//set state with props from parent: SEARCH
    static getDerivedStateFromProps(nextProps,prevState) {
        //mounting
        return { query : nextProps.query, sort: nextProps.sort}
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


//force the page to re-render
    componentDidUpdate (prevProps) {
        if(prevProps.sort !== this.props.sort){
            this.sortMe(this.state.result, this.state.sort)
            let sortedhtml = this.format(this.state.result);
            this.setState({html: sortedhtml})
        }
    }



//helper functions

//take the res.json and convert into nice HTML
format(array) {
    return array.map((item,index)=>{
        let name = item.show.name;
        let url = item.show.url;
        let rating = item.show.rating.average;
        let img = item.show.image ? item.show.image.medium : "image does not exist";
        // let network = item.show.network.name ? item.show.network.name : "No network available" ;
        return <IndivResult name={name} img={img} rating={rating} url ={url}  key={index} />
    })
}

// sorts results based on selected category

sortMe(array,category){
    switch(category){
        case "name":
        array.sort((a,b)=>{
            return(b.show.name > a.show.name) ? 1: -1
        })
        break;
    case "rating":
        array.sort((a,b)=>{
            return(b.show.rating > a.show.rating) ? 1: -1
        })
        break;
    case "network":
        array.sort((a,b)=>{
            return(b.show.network.id > a.show.network.id) ? 1: -1
        })
        break
    default:
            return array;

    }
}





    render(){


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