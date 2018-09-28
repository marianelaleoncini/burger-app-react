import React from 'react';
import './Layout.css';

const Layout = (props) => (  
    <React.Fragment>
    <div>

    </div>
    <main className="content">
        {props.children}
    </main>
    </React.Fragment>
);

 
export default Layout;