import React from 'react'

function Header() {
  return (
    <div>
        <nav className="container-fluid navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand ps-3" href="/Home"><i class="fa-brands fa-stack-overflow fa-2xl"></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark" style={{fontSize:'20px',fontWeight:'700'}} href="/Home"><i class="fa-solid fa-house fa-sm" style={{color:' black'}} ></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" style={{fontSize:'20px',fontWeight:'700'}} href="/TaskList"> <i class="fa-solid fa-list-check fa-sm" style={{color:'black'}}></i>&nbsp; Task List</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header