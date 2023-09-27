import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='container-fluid bg-primary mt-3 pt-3'>
        <div className='row'>
            <div className='col col-12 col-sm-3 col-md-3 col-lg-3 mx-auto'>
                <h5>&#169; Copyrigth {year} </h5>
            </div>
            <div className='col col-12 col-sm-3 col-md-3 col-lg-3 mx-auto'>
                <h5>Address </h5>
                <ul>
                    <li style={{listStyle:'none'}}>No: 14/B-13</li>
                    <li style={{listStyle:'none'}}>5th Cross Road,</li>
                    <li style={{listStyle:'none'}}>Chennai - 600023</li>
                </ul>
            </div>
            <div className='col col-12 col-sm-3 col-md-3 col-lg-3 mx-auto'>
                    <h5>Contact Us </h5>
                    <ul>
                        <li style={{listStyle:'none'}} >Email : abcd@hmail.com</li>
                        <li style={{listStyle:'none'}} >Phone : 01425-556983</li>
                    </ul>
            </div>
            <div className='col col-12 col-sm-3 col-md-3 col-lg-3'>
                    <h5>Social Media</h5>
                    <span><i class="fa-brands fa-facebook fa-lg"></i> &nbsp;
                          <i class="fa-brands fa-instagram fa-lg"></i> &nbsp;
                          <i class="fa-brands fa-square-twitter fa-lg"></i>
                    </span>

            </div>
        </div>
      </div>
  )
}
