import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponenet) => {
    return (props) => (
        <div>
           {!props.isAdmin && <p>This is private info please dont dare to share.</p> }
           <WrappedComponenet {...props} />
        </div>
    );
}

const requestAuthentication = (WrappedComponenet) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponenet {...props} />
            ) : (
                <p>First Login Biyatch..</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requestAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is some details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is my TASKSSSSSS" />, document.getElementById('app'));
