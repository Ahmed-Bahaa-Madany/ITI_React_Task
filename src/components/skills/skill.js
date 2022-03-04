function FunSkill (props){
    const {skills} = props
    console.log(skills)
    return (
        <>
            {skills.map((skill,index) => {
                return (
                    <div className="prog w-75" key={index}>
                        <div className="prog-bar bg-white m-3 d-flex">
                            <div className="text-center bg-dark p-3 text-white w-25">{skill.name}</div>
                            <div className="w-75">
                                <div className="bg-success" style={{width:skill.width,height:skill.height}}></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FunSkill;