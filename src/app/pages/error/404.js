import React from 'react';
import {Link} from 'react-router-dom';

export default function Error404()
{
    return (
        <React.Fragment>
            <div>
                Not Found (Code 404)
            </div>
            <div>
                Sorry but we could not find the page you are looking for.
            </div>
            <div>
                <Link className="font-medium" to="/">Go To Home</Link>
            </div>
        </React.Fragment>
    );
}