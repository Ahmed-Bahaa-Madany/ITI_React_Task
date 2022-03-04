import React from "react";
import './about.css'


class ClassAbout extends React.Component {

    constructor(){
        super();
        this.state = {
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsam quia eligendi, asperiores excepturi cupiditate velit perspiciatis numquam eos eaque. Dolores enim corporis perspiciatis possimus facilis cupiditate beatae natus quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tenetur vitae fugiat deserunt omnis quo? Modi, fugit pariatur, temporibus blanditiis numquam id earum eligendi porro velit cupiditate, molestias aliquid repudiandae?"
        }
    }

    render(){
        const {info} = this.state;
        return (
            <section className="about my-5 py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                        <div className="title text-center">
                        <h1 className="fs-1">About Me</h1>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="info">
                        <p className="mb-5">{info}</p>
                        <a href="../../public/index.html" download="cv" className="d-inline-block bg-secondary text-white border border-white px-3 py-2">Download Now</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default ClassAbout;