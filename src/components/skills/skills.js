import React from "react";
import './skills.css'
import FunSkill from './skill'


class ClassSkills extends React.Component {

    constructor(){
        super();
        this.state = {
            skilLList : [
                {name:'Html',width:"90%",height:"100%"},
                {name:'Css',width:"80%",height:"100%"},
                {name:'Javascript',width:"85%",height:"100%"},
                {name:'React',width:"60%",height:"100%"},
                {name:'Photoshop',width:"40%",height:"100%"},
                {name:'Adobe XD',width:"60%",height:"100%"},
                {name:'Node.js',width:"70%",height:"100%"},
                {name:'WordPress',width:"20%",height:"100%"}
            ]
        }
    }

    render(){
        const {skilLList} = this.state;
        return (
            <section className="skills bg-secondary py-5">
                <div className="container">
                    <div className="content">
                    <div className="title text-center">
                        <h1 className="text-white fs-1 mb-3">Skills</h1>
                        <p className="text-white w-75 m-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quos non optio nsive blanditiis, deserunt quod
                        aliquid unde dolores quae perferendis ratione rerum, repudiandae natus voluptas eos. Dolorem cupiditate
                        minus similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim culpa molestias
                        ratione sapiente iste, reprehenderit minus eveniet, rem magnam dicta vero esse dolorum eius vitae numquam
                        quis ea nihil.</p>
                    </div>
                    <div className="info mt-5">
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="txt w-75 mx-auto mt-5 pt-5">
                            <p className="text-white text-center fs-2">MY FOCUS</p>
                            <hr className="text-white m-2"/>
                            <p className="text-white fs-2">UI/UX DESIGN</p>
                            <p className="text-white fs-2">Responsive Design</p>
                            <p className="text-white fs-2">Web Design</p>
                            <p className="text-white fs-2">Mobial App Design</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <FunSkill skills={skilLList}/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        )
    }
}


export default ClassSkills;