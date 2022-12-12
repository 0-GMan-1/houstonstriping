// Import Assets
import uniswap from '../assets/WIP.jpg';
import compound from '../assets/image.png';
import aave from '../assets/aave.png';
import ColoredLine from './ColoredLine'
import YoutubeEmbed from './YoutubeEmbed'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3 style={{ color: "#5d47ff"}}>Decentralized Videos</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Incorperates videos with NFTs. Content creators will have proven ownership
                        of their videos via NFTs. Uses minting for video creation and burning for deletion.
                        Creators can be donated to via Cryptocurrency. 
                    </p>

                    <button className='button__WIP'>Site</button>
                    <a href="https://github.com/0-GMan-1/DecentralizedVideos" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>GC Token Exchange</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>A fully fledged, Defi, Cryptocurrency Exchange with 3 custom ERC20 Tokens.
                    This website built in React, is interactable with metamask wallets. Has an entire database built in Redux.
                    Incorperates features such as Depositing, Withdrawing,
                    Pricecharts and a live transaction status, just to name a few.
                    Smart Contracts written in Solidity, are deployed to the Goerli Testnet, along with the website being deployed to the IPFS
                    making this entirely Web 3.0
                    </p>

                    <a href="https://raspy-firefly-1732.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/0-GMan-1/Blockchain-Bootcamp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Trading Bot</h3>
                    <YoutubeEmbed embedId="IlpewHiZP58" />
                    <p>An Arbitrage trading bot. Utilizes a javascript bot that interacts with a flashloan smart contract.
                    The bot can scan for arbitrage opportunities on multiple exchanges, and for multiple tokens at the same time
                    to make sure you don't miss out on potential profit. The smart contract uses the DYDX flashloan provider
                    and plugs into the desired exchanges while it waits for an opportunity
                    </p>

                    <a href="https://www.youtube.com/watch?v=IlpewHiZP58&ab_channel=GrahamSkeen" target="_blank" className="button">Video</a>
                    <a href="https://github.com/0-GMan-1/ArbitrageBot" target="_blank" className="button">Code</a>
                </div>
            </div>
            <ColoredLine color="#e8e8e8" />
        </section>
    );
}

export default Projects;