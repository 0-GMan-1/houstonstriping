// Import Assets
import profile from '../assets/Gman-Logo.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Graham Skeen</h1>
                <p>Blockchain Developer Currently Working On</p>
                <p className='header__project' style={{ color: "#5d47ff"}}>ETH Battles</p>
                <a href="mailto:grahamisaac8@gmail.com?subject=Blockchain Development" className="buttonhead">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;