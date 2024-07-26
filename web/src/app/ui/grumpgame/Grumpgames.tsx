import React from "react";
import roadGrump from '../../../assets/grumpyroad.webp';

export default function Grumpgames() {
    return (
        

                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 p-4 text-bckgd">
                    <div className="md:w-1/2 w-full mb-6 md:mb-0  mx-3 bgRoad bg-no-repeat bg-center  ">
                        <h2 className="text-2xl text-white mb-5 md:my-5 text-center">Grumpy Road</h2>
                        <ul className="list-disc flex flex-col gap-y-5 px-14">
                            <li >Q3 2024: Fair Launch, Token Launch, Initial DEX Offering (IDO) on Raydium, V2 website, Introduction of GrumpyCat Game( alpha), first ama, promotional vidéo</li>
                            <li > Q4 2024: Staking Platform Launch, Major Partnerships Announcements, First Community Event, GrumpyCat Game release, Live Staking & DApp: Stake GRUMP tokens and use the decentralized application, promotional movies (launch of the grumpflix)</li>
                            <li > Q1 2025: Expansion of Ecosystem, , Enhanced Marketing Campaigns, Exchange Listings</li>
                            <li > Q2 2025: Additional Exchange Listings, Further Development of DApp, Community-driven Projects Funding.</li>
                        </ul>
                    
                    </div>
                    <div className="md:w-1/2 w-full h-80 relative">
                    <h2 className="absolute right-14 bottom-5">Grumpy game in Coming ...</h2>
                    <p className="absolute right-0 top-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloremque laborum accusamus dicta voluptatem mollitia expedita deserunt natus fugit error sit ea numquam itaque, recusandae molestias quae non exercitationem nesciunt?</p>
                    <img 
                    src={require('../../../assets/bg-website.webp')} 
                    alt="Tokenomics Image"
                    className="w-full h-full object-contain"
                />
                    </div>
                </div>
    )
}