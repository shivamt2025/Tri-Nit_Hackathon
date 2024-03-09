import React, { Component } from 'react';
class Footer extends Component{
    render(){
        return(
        <div className="footer-dark">
        {/* <!-- Start: Footer Content --> */}
        <footer>
            <div className="container">
                <div className="row" style={{marginTop:"20px"}}>
                    {/* <!-- Start: Company Tagline --> */}
                    <div className="col-md-6 item text" style={{marginBottom:"0px"}}>
                        <h3>Hello_world</h3>
                        <p>“Trinit hackathon dev -02 track ”<br/>under production</p>
                    </div>
                    {/* <!-- End: Company Tagline --> */}
                    {/* <!-- Start: About --> */}
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Hack</a></li>
                            <li><a href="#">Team</a></li>
                           
                        </ul>
                    </div>
                    {/* <!-- End: About --> */}
                    {/* <!-- Start: Services --> */}
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Monitoring</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Reporting</a></li>
                        </ul>
                    </div>
                    {/* <!-- End: Services --> */}
                </div>
                {/* <!-- Start: Social Icons --> */}
                <div className="col item social" style={{margintop: "51px"}}>
                    <a href="#"><i className="fa fa-google"></i></a>
                    <a href="#"><i className="icon ion-social-twitter"></i></a>
                    <a href="#"><i className="icon ion-social-github"></i></a>
                    <a href="#"><i className="icon ion-social-linkedin"></i>
                    </a></div>
                {/* <!-- End: Social Icons --> */}
                {/* <!-- Start: Divider --> */}
                <div style={{textAlign:"center",margintop:"-40px"}}></div>
                {/* <!-- End: Divider --> */}
                {/* <!-- Start: Copyright --> */}
                <p className="copyright" style={{marginTop: "37px"}}>ShivDiv © 2024</p>
                {/* <!-- End: Copyright --> */}
            </div>
        </footer>
        {/* <!-- End: Footer Content --> */}
    </div>
  
        )
    }
}
export default Footer;
