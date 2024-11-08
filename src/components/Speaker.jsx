import React, { useState } from "react";

const Speaker = () => {
    const [selectedSpeakerName, setSelectedSpeakerName] = useState(null);
    const [selectedSpeakerDescription, setSelectedSpeakerDescription] = useState(null);
    const [selectedSpeakerDesignation, setSelectedSpeakerDesignation] = useState(null);
    const [selectedSpeakerCompanyName, setSelectedSpeakerCompanyName] = useState(null);
    const [selectedSpeakerImage, setSelectedSpeakerImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const Speakers = [
        {
            name: "John Doe",
            designation: "Chief Marketing Officer",
            companyName: "Acme Corp",
            speakerImage: "https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0ozEGQKCEzpMDFiGB0WI7e3Jy5hs~XAzkQEmXckRff9Yql3RG4oZ3qz7U-lmzlgN5l~VSp88OF3WSEHLG8hewYzujk8BfcrkQvmBJSeDEvGfDm6uDq5Hsx9cQ1cfgLQHZz10fHEBoS7H8kb73P-hWtJj2qYrDYGdR5YhEHfHT9EQehf5C90C4PZkDVQRu6FZWCVcxHr7FcTZGWaNC-LSjOSmA4KZaKs1FIk-OEuIlV9fK7KSQoo-7pSIHsF2dGTfhxvY4s8ywp-UY0qcUPSa7BHmFJKLlpd~NhfU2JEvdZGid5XK-F6O7RbD4CLUF1cc6yaUuh1WrCdQ9fM~aRMJQ__",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
        },
        {
            name: "John Doe",
            designation: "Chief Engagement Officer",
            companyName: "Acquia",
            speakerImage: "https://s3-alpha-sig.figma.com/img/9de3/b8aa/4e6fd86d00bc645311899b3fbcca52d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-2az8c~TQ4GQTgMdGGA~OiZRcxQqNliOmg1Nrh3~q5mCbkyAXoOFrZXz3rtpBmhoLH2MEPcD8uyzrysiBixOxyySVYRLqY2pdQYKhqW1Kibe4meVDaoZKzWOedglJPRuLQhW62vUhFnnDWDaxe74zfw1MfHfD-qLD4-v2FEWZy4Ww64U6DTEIPNSgwu2vhoCu0UzxocqOeUDrobUZuHnzPMc29WeTKpzHo~9NfifEoSciD~yZUa0s40o9Q~gM54g-UhG-46MlVop01DP9xSiLXP3RnQq6B3DimGuPflSgw9-5gSLX5Z94~AVOpkYwkxNCs-jiWwTnZfxmyz5X~qIw__",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        },
        {
            name: "John Doe",
            designation: "Chief Technical Officer",
            companyName: "Pantheon",
            speakerImage: "https://s3-alpha-sig.figma.com/img/9134/0d19/81845f21043dd8f5192da248767c4eae?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k803O02X0pXmvOoAJFVO6iTOVx5GGHL72bT8~YUINLU1Y6aGiPW2aRLhexGOSlbBUQ89XvZZIyecwmCJ5cV~hgYwOhN~oSLMER17lHrYCYNHAT2Jcn9BekVJbmj3zvnHHZVJR4KKR0tPZpDmCae~SI32EupBZK9ysXymdgpxj-WznEuPuu1xtWW3fyx7~ItSbU7hR86mpPpdqZ-Ds6PZH~4ZPPIkPip0oT7MehKrtQe-yXfJIoMZLu-bY9A02b~tUb2PtcZWKYBOElVVVcZRfkAG4MNx0B5RxvSxXsadVuMULmz3yebUvtY5qJrJy8gCIGCRpN35dN~qR3HpnuflCw__",
            description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
        },
        {
            name: "John Doe",
            designation: "Chief Marketing Officer",
            companyName: "Specbee",
            speakerImage: "https://s3-alpha-sig.figma.com/img/aeba/3e61/75255eef4aafbeaf378e32d61894f628?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THCVaU2hZrwyAHEhKFhbXoYU4qg1f7~FK7hrPzcA1iCzXSUKV88oyZd5eSNfxrMuuAW4CK4XbwO3NCLAk2QGzmpSTcqyvuz7honPyZsNEAklbn-Gq6x06PEkqzZWPaa2RBro6TBvLC9SUsP3S9LXnzg53jVNaJ5yg2YOBbUeLp3qzOF0zGCkKdBDFJ0EnvHqqqLmAEvMrhcxNBTbyWi2F0I7yk15nb5obNZYbGGz0Tr7z7U-tWrbHtmPC3ld7AFB~IBamtN9nQQ5GpER0agWBD0ZrbpLBfMLoCxhhIZQZeigQzKxqp9d~g8aWucIgPAZh8pDE-7IxdZjQ~CjaHDmEQ__",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
        },
    ];

    const handleClick = (speaker) => {
        setSelectedSpeakerName(speaker.name)
        setSelectedSpeakerDescription(speaker.description)
        setSelectedSpeakerCompanyName(speaker.companyName)
        setSelectedSpeakerDesignation(speaker.designation)
        setSelectedSpeakerImage(speaker.speakerImage)
        setShowModal(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const SpeakerModal = () => {
        return (
            <div className="flex flex-col lg:flex-row justify-center items-center mt-14 pb-10 shadow-3xl">
                <img className="w-[150px] mr-4 h-[150px] mt-9 border rounded-full" src={selectedSpeakerImage} />
                <div className="speaker-info text-center lg:text-start lg:border-r-2 pr-10 border-[#B7B7B7]">
                    <h1 className="text-2xl mb-2 font-bold">{selectedSpeakerName}</h1>
                    <p className="text-base font-semibold">{selectedSpeakerDesignation}</p>
                    <p className="text-lightGreyColor">{selectedSpeakerCompanyName}</p>
                    <div className="social-links mt-3 gap-4 flex justify-center items-center lg:justify-start items-start">
                        <img src="../../assets/Vector.png"/>
                        <img src="../../assets/x.png"/>
                        <img src="../../assets/linkedin.png"/>
                    </div>
                </div>
                <div className="speaker-description ml-5 mt-5 lg:mt-0">
                    <p className="text-lg w-[300px] lg:w-[732px]">{selectedSpeakerDescription}</p>
                </div>
                <img onClick={() => setShowModal(false)} className="relative cursor-pointer bottom-[630px] right-[-128px] lg:right-[0px] lg:bottom-[60px]" src="../../assets/cross.png" />
            </div>
        );
    }

    return (
        <div>
            <div className="featured-speakers text-center mt-10">
                <h1 className="text-4xl mb-2">View our Featured Speakers for the Event</h1>
                <p className="text-lg">Speakers are core contributors and industry thought leaders working at companies that push for innovation.</p>
            </div>
            {showModal ? <SpeakerModal /> : ""}
            <div className="cards flex flex-col lg:flex-row justify-center items-center mt-14">
                {Speakers.map((speaker, index) => {
                    return (
                        <div key={index} onClick={() => handleClick(speaker)} className="w-[285px] h-[321px] cursor-pointer mr-4 shadow-3xl">
                            <img className="w-[150px] h-[150px] mt-9 border rounded-full block ml-auto mr-auto" src={speaker.speakerImage} />
                            <div className="speaker-info text-center mt-4">
                                <h1 className="text-2xl font-bold">{speaker.name}</h1>
                                <p className="text-base font-semibold">{speaker.designation}</p>
                                <p className="text-lightGreyColor">{speaker.companyName}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div className="lg:mt-9 see-the-program flex flex-col lg:flex-row justify-center items-center">
                    <h1 className="text-lg ml-4 lg:ml-0 w-[250px] lg:w-[150px] relative top-[105px] left-[-58px] lg:left-[0px] lg:top-[15px] lg:mr-14">Click here to see the full program</h1>
                    <button className="bg-lightBlueColor text-white rounded-xl lg:rounded-lg w-[200px] p-2 lg:w-[405px] p-3 text-xl font-semibold">See the Program</button>
                </div>
                <img className="ml-[100px] md:ml-[320px] lg:ml-[500px] mt-5" src="../../assets/Arrow.png" />
            </div>
        </div>
    )
}

export default Speaker;