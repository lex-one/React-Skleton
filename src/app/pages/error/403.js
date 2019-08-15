import React from 'react';
import {Link} from 'react-router-dom';

export default function Error403()
{
    return (
        <React.Fragment>
            <div>
                Forbidden (Code 403)
            </div>
            <div>
                You don't have permission to access / on this resource.
            </div>
            <div>
                <Link className="font-medium" to="/">Go To Home</Link>
            </div>
        </React.Fragment>
    );
}