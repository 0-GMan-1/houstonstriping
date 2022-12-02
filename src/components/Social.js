import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import gmail from "../assets/email-outline.png"

const Social = () => {
    return (
        <div className="social">
            <h2>Socials</h2>

            <a href="mailto:grahamisaac8@gmail.com?subject=Blockchain Development" className="button"><img src={gmail} width="100" height="100"/></a>
            <a href="https://twitter.com/0_GMan_1" className="button"><img src={twitter} width="100" height="100"/></a>
            <a href="https://www.linkedin.com/" className="button"><img src={linkedin} width="100" height="100"/></a>
            <a href="https://github.com/0-GMan-1" className="button"><img src={github} width="100" height="100"/></a>
        </div>
    );
}

export default Social;