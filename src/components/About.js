import MyselfC from "./MyselfC"
import MyselfF from "./MyselfF"

const About = () => {
    return (
        <>
            <h1>I'm About Page</h1>
            <div className="diff-con">
                <div>
                    <MyselfF name="firoz" />
                </div>
                <div>
                    <MyselfC name="firoz" />
                </div>
            </div>
        </>
    )
}

export default About