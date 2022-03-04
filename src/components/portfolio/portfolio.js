import React from "react";
import "./portfolio.css";

class ClassPortfolio extends React.Component {
  constructor() {
    super();
    this.state = {
        portf :[
            {name:'WEB DESIGN',value:'bg-secondary'},
            {name:'MOBILE DESIGN',value:'bg-dark'},
            {name:'LOGO DESIGN',value:'bg-secondary'}
          ]
        ,
          portfol :[
            {name:'WEB APPLICATION',value:'bg-dark'},
            {name:'MOBILE APPLICATION',value:'bg-secondary'},
            {name:'PWA',value:'bg-dark'}
          ]
    };
  }

  render() {
    const { portf, portfol } = this.state;
    return (
        <section className="portfolio py-5">
            <div className="container">
                <div className="content">
                <h1 className="mb-5">Portfolio</h1>
                <div className="row">
                    <>
                        {portf.map((prot,index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className={`cards d-flex justify-content-center align-items-center flex-column m-3 ${prot.value}`}>
                                    <p className="fs-3 text-white ">{prot.name}</p>
                                <div className="bg-light"></div>
                                </div>
                            </div>
                        )})}
                    </>
                </div>
                <div className="row">
                    <>
                    {portfol.map((portfo,index) => {
                        return (
                            <div className="col-md-4" key={index}>
                        <div className={`cards d-flex justify-content-center align-items-center flex-column m-3 ${portfo.value}`}>
                            <p className="fs-3 text-white ">{portfo.name}</p>
                            <p className="fs-3 text-white ">DEVELOPMENT</p>
                        </div>
                    </div>
                        )})}
                    </>
                    
                </div>
                </div>
            </div>
        </section>

    );
  }
}

export default ClassPortfolio;
