"use client"

import careers from "../assets/Careers.jpg";
import UseCases3 from "../ul/UseCases3";
import Values from "../ul/values";
import competitiveCompensation from "../assets/competitiveCompensation.png";
import healthAndWellness from "../assets/healthAndWellness.png";
import retirementPlanning from "../assets/retirementPlanning.png";
import workLifeBalance from "../assets/workLifeBalance.png";
import OpeningsCard from "../ul/openingsCard";
import FrequentlyAskedQuestions from "../components/frequentlyAskedQuestions";
import StartCareer from "../components/startCareer";
import SectionCarAbout from "../ul/sectionCarAbout";


const Careers = () => {
    return (
        <main className="flex mt-[50px] flex-col justify-between items-center">
            <SectionCarAbout 
                title={`Welcome to <span className="text-green60">YourBank</span> Careers!`} 
                text={`Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and 
                            providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, 
                            we strive to make a positive impact in the lives of our customers and communities. 
                            Join us today and be a part of our mission to shape the future of banking.`} 
                img={careers} />
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
                Our <span className="text-green60">Values</span>
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    At YourBank, our values form the foundation of our organization and guide our actions. 
                    We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. 
                    These values define our culture and shape the way we work together to achieve our goals.
                </p>
                <div className="flex flex-wrap justify-between gap-[50px] ">
                    <Values title="Integrity" text="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, 
                                                    and stakeholders, even when faced with difficult choices." />
                    <Values title="Customer Centricity" text="Our customers are at the heart of everything we do. We are dedicated to understanding their needs, 
                                                            providing personalized solutions, and delivering exceptional service that exceeds expectations." />    
                    <Values title="Collaboration" text="We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. 
                                                        By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together." />
                    <Values title="Innovation" text="We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. 
                                                    We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking." />  
                </div>  
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
                Our <span className="text-green60">Benefits</span>
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    At YourBank, we value our employees and are dedicated to their well-being and success. 
                    We offer a comprehensive range of benefits designed to support their personal and professional growth.
                </p>
                <UseCases3 
                    img1={competitiveCompensation.src} title1="Competitive Compensation" text1="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
                    img2={healthAndWellness.src} title2="Health and Wellness" text2="We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
                    img3={retirementPlanning.src} title3="Retirement Planning" text3="YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term." 
                    img4={workLifeBalance.src} title4="Work-Life Balance" text4="We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments." />
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] px-[30px] py-5 mx-auto">
                <h2 className="mb-3.5 text-2xl md:text-5xl text-center md:text-left">
                    <span className="text-green60">Job Openings</span>
                </h2>
                <p className="mb-[50px] text-sm font-light md:text-[18px]">
                    Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. 
                    Join our team and be part of shaping a brighter future in the banking industry
                </p>
                <div className="flex flex-wrap justify-between mx-auto gap-[20px] ">
                    <OpeningsCard title="Relationship Manager" info1="Location: India" info2="Department: Retail Banking"
                                  text="As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. 
                                                                You will proactively identify their financial needs and offer tailored 
                                                                solutions to help them achieve their goals. We are seeking individuals with excellent 
                                                                communication skills, a strong sales acumen, and a passion for delivering exceptional customer service."
                                  li1="Bachelor's degree in Business, Finance, or a related field"
                                  li2="Minimum of 3 years of experience in sales or relationship management in the banking industry"
                                  li3="Proven track record of meeting and exceeding sales targets"
                                  li4="Excellent interpersonal and negotiation skills"
                                  li5="Strong knowledge of banking products and services" />

                    <OpeningsCard title="Risk Analyst" info1="Location: India" info2="Department: Risk Management"
                                  text="As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. 
                                                                You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong 
                                                                analytical skills and a solid understanding of risk management principles."
                                  li1="Bachelor's degree in Finance, Economics, or a related field"
                                  li2="Minimum of 2 years of experience in risk management or a similar role"
                                  li3="Proficiency in risk analysis tools and techniques"
                                  li4="Strong analytical and problem-solving skills"
                                  li5="Knowledge of regulatory requirements and industry best practices" />

                    <OpeningsCard title="IT Security Specialist" info1="Location: India" info2="Department: Information Technology"
                                  text="As an IT Security Specialist at YourBank, you will be responsible for ensuring the 
                                                                        security and integrity of our information systems. You will develop and implement security protocols, 
                                                                        conduct vulnerability assessments, and respond to security incidents. 
                                                                        We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, 
                                                                        and a commitment to maintaining the confidentiality of customer data."
                                  li1="Bachelor's degree in Computer Science, Information Security, or a related field"
                                  li2="Minimum of 5 years of experience in IT security or a similar role"
                                  li3="In-depth knowledge of network security protocols and technologies"
                                  li4="Familiarity with regulatory frameworks such as PCI DSS and GDPR"
                                  li5="Professional certifications such as CISSP or CISM are preferred" />                             
                </div>
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
                <FrequentlyAskedQuestions />
            </section>
            <section className="container mb:-[50px] md:mb-[100px] 2xl:mb-[150px] py-5 mx-auto flex flex-col px-[30px]">
                <StartCareer />
            </section>
        </main>
    )
}

export default Careers