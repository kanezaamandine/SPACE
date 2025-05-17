// import React from "react";
// import './navbar.css';
// function Home(){
//     return(
//         <div className='top'>

//             <div id="logo"></div>
//             <div id="text">
//                 <p id="p1"> Home</p>
//                 <p id="p1"> Services</p>
//                 <p id="p1"> About</p>
//                 <p id="p1"> Contact</p>
//                 <button id="register">Register</button>
//             </div>
//         </div>
//     );
// };

// export default Home;
import React from "react";
import './navbar.css';

function Home() {
    return (
        <div className='top'>
            <div id="logo"></div>
            <p id="p2"> Growth <span id="space"> space</span></p>
            <div id="text">
                <p id="p1" style={{ color: 'rgb(201, 157, 76)' }}>Home</p>
                <p id="p1">Services</p>
                <p id="p1">About</p>
                <p id="p1">Contact</p>
            </div>
            <button id="register">Register</button>
        </div>
    );
}

export default Home;
