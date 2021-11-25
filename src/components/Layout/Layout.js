import React from 'react';

const Layout =({children}) =>{
    return(
        <div>
        <div>
            Main Layout
        </div>
        <main>{children}</main>
        </div>
    )
}

export default Layout;