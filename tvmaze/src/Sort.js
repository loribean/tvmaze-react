import React from 'react';


const Sort = (props) => {
    return (



        <div>
        <label for="sort">Sort by</label>

        <select name="sort" id="sort" value={props.optionChoice} onChange={props.onChange}>
          <option value="default">Relevance</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="network">Network</option>
        </select>

        </div>
        )
}

export default Sort;