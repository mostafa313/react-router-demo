import React from 'react';
import {Link, Route} from 'react-router-dom';

const Category = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${props.match.url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/footwear`}>Footwear</Link>
                </li>

            </ul>
            <Route
                path={`${props.match.path}/:name`}
                render={(props) =>( <div> <h3> {props.match.params.name} </h3></div>)}/>
        </div>
    )
}

export default Category;
