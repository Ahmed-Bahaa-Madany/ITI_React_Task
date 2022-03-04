import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


class ClassFooter extends React.Component {

    constructor(){
        super();
        this.state = {}
    }

    render(){
        return (
            <section className="footer py-5 bg-dark text-white ">
                <div className="container">
                    <div className="content">
                    <div className="row">
                        <div className="col-sm-4">
                        <p className="fs-3 mb-1">GET IN TOUCH</p>
                        <div>
                            <span className="fs-5 me-2"><i className="fa-solid fa-envelope"></i></span>
                            <span>kr12@hotmail.com</span>
                        </div>
                        <div>
                            <span className="fs-5 me-2"><i className="fa-solid fa-phone"></i></span>
                            <span>717-555-1234</span>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="../../public/index.html" className="fs-3 border border-white px-3 py-2 text-white ">CONTACT ME</a>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="text-end">
                            <div>
                                <span class="me-3 fs-3"><FontAwesomeIcon icon={faLinkedin} /></span>
                                <span class="me-3 fs-3"><FontAwesomeIcon icon={faFacebook} /></span>
                                <span class="me-5 fs-3"><FontAwesomeIcon icon={faTwitter} /></span>
                            </div>
                            <p className="fs-4">Copyright &copy; 2019 KR</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default ClassFooter;