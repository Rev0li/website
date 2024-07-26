

export default function Grumpnomics() {
    return (

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-aero">

        <div className="md:w-1/2 w-full mb-6 md:mb-0 text-center mx-3">
            {/* <img 
                src={require('../../../assets/tokenomics.webp')} 
                alt="Tokenomics Image"
                className="w-full h-full object-contain"
            /> */}
            <ul className="list-none flex flex-col gap-y-5 px-14 text-left pl-20 ">
                <li > Fair Launch: 40% (39,800,000 GRUMP)</li>
                <li > Team & Reserve and Burn: 20% (19,900,000 GRUMP)</li>
                <li > Marketing & Partnerships: 10% (9,950,000 GRUMP)</li>
                <li > Community Rewards & Ecosystem Development: 10% (9,950,000 GRUMP)</li>
                <li > Liquidity: 20% (19,900,000 GRUMP)</li>
            </ul>
        </div>

        <div className="md:w-1/2 w-full mb-6 md:mb-0 text-center mx-3">
            <h2 className="text-2xl text-gread mb-5 md:mb-5">Pre-launch Grumpy !</h2>
            <p className="text-white mb-2 md:mb-2">Hello, watch our tokenomic about your favorite GrumpMeme! And get pre-laynch </p>
            
            
            <ul className="list-none flex flex-col gap-y-5 px-14 text-left pl-20 ">
                            <li >Status Ended</li>
                            <li > Min buy 0.25 BNB</li>
                            <li >Max buy 0.5 BNB</li>
                            <li > Current raised 60 BNB (100.00%)</li>
                            <li > Total contributors  120</li>
            </ul>
        </div>
    </div>
            
    )
}