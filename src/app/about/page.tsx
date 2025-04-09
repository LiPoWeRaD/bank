"use client"

import MissionVision from "../ul/missionVision";
import SectionCarAbout from "../ul/sectionCarAbout";
import PressReleases from "../ul/pressReleases";
import about from "../assets/About.jpg";
import mission1 from "../assets/mission.jpg";
import mission2 from "../assets/mission2.jpg";
import pressReleases1 from "../assets/PressReleases1.jpg";
import pressReleases2 from "../assets/PressReleases2.jpg";
import pressReleases3 from "../assets/PressReleases3.jpg";
import pressReleases4 from "../assets/PressReleases4.jpg";

const About = () => {
    return (
        <main className="flex mt-[50px] flex-col justify-between items-center">
            <SectionCarAbout 
                title={`Where Banking Meets <span className="text-green60">Excellence!</span>`} 
                text={`At YourBank, we believe that banking should be more than just transactions. 
                       It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. 
                       As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. 
                       With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. 
                       Join us on this exciting journey and discover a new level of banking excellence.`} 
                img={about} />
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left text-green60">
                    Mission & Vision
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, 
                    creating a brighter financial future for individuals and businesses while maintaining a 
                    strong commitment to customer satisfaction and community development
                </p>
                <MissionVision title1="Mission" title2="Vision" 
                               text1="At YourBank, our mission is to empower our customers to achieve financial success. 
                               We are dedicated to delivering innovative banking solutions that cater to their unique needs. 
                               Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, 
                               lasting relationships with our customers. Our mission is to be their trusted partner, 
                               helping them navigate their financial journey and realize their dreams." 
                               text2="Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. 
                               We envision a future where banking is accessible, transparent, and tailored to individual preferences. 
                               Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new 
                               standards for customer-centric banking. Our vision is to be the preferred financial institution, 
                               known for our unwavering commitment to excellence, trust, and customer satisfaction."  
                               img1={mission1} img2={mission2} />
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left text-green60">
                    Press Releases
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
                </p>
                <div className="flex flex-col flex-wrap gap-y-[30px] xl:flex-row justify-between  ">
                    <PressReleases img={pressReleases1} 
                                   title="YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction" 
                                   lacation="India" 
                                   date="06/11/2024" 
                                   text={`YourBank is pleased to announce the introduction of our new Rewards Program, 
                                   aimed at rewarding our loyal customers and enhancing their banking experience. 
                                   The program offers exclusive benefits, discounts, and personalized offers tailored to individual 
                                   customer preferences. With this initiative, YourBank reaffirms its commitment to 
                                   delivering exceptional value and building lasting relationships with our valued customers.`} 
                                />
                    <PressReleases img={pressReleases2} 
                                   title="YourBank Expands Branch Network with Opening of New Location in Chennai" 
                                   lacation="India" 
                                   date="12/11/2024" 
                                   text={`YourBank is excited to announce the grand opening of our newest branch in [City]. 
                                   This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our 
                                   comprehensive range of banking services. The new branch will feature state-of-the-art facilities, 
                                   a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.`} 
                                />
                    <PressReleases img={pressReleases3} 
                                   title="YourBank Partners with Local Nonprofit to Support Financial Education Initiatives" 
                                   lacation="India" 
                                   date="24/12/2024" 
                                   text={`YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. 
                                   This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, 
                                   and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a 
                                   greener future while providing innovative banking solutions to our customers.`} 
                                />
                    <PressReleases img={pressReleases4} 
                                   title="YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility" 
                                   lacation="India" 
                                   date="28/12/2024" 
                                   text={`YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. 
                                   This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, 
                                   and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener 
                                   future while providing innovative banking solutions to our customers.`} 
                                />
                </div>
            </section>
        </main>
    )
}

export default About