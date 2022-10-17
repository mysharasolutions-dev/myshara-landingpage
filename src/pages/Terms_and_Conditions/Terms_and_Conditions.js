import React from 'react'
import Copyright from '../../components/copyright/Copyright'
import './terms_and_conditions.css'

function Terms_and_Conditions() {
  return (
    <div className='terms_and_conditions'>
        <h2 className='company_name'>Myshara Solutions</h2>
        <p>AGREEMENT</p>
        <h1>Terms and Conditions</h1>

        <p>
            We know it's tempting to skip there Terms and Conditions, but it is important to establish what you can 
            expect from us as you answer the questionnaire, and what we expect from you. <br/> <br/>

            You accept to participate in the Qualitative survey provided by Myshara Solutions by completing the questionnaire. 
            You should understand that your participation is voluntary and that you can withdraw consent anytime. 
            You affirm that your involvement will not breach any current agreements or cause any conflict of interest. The 
            thoughts and opinions provided will be your own. You acknowledge that the Data Controller is MyShara Solution 
            and is a company operating in the Information Technology Sector. For research purposes, the identity of the Client 
            will be revealed to us during the project. <br/><br/>

            Your participation in this research will involve either of the following scenarios:
            <ul>
                <li>Filling in the questionnaire</li>
                <li>On-site interview</li>
            </ul>

            When participating in all phases of this research, you should understand that:
            <ul>
                <li>As part of this survey, your responses will only be shared for internal purposes with Myshara Solutions and won’t be released to the public.</li>
                <li>You may be expected to contribute to the questionnaire/ on-site interview and answer questions in the presence of the research team.</li>
            </ul>

            By filling in this questionnaire you consent that:
            <ul>
                <li>Personal/company information, such as (but not limited to) your name/company name and email address, will be used for internal research purposes.</li>
                <li>Myshara Solution will contact you again about this project within 12 months of this date, for the specified purpose.</li>
                <li>You will participate in a survey by answering questions and providing information that will aid in the development of a better Myshara Point of Sales Product. You accept that Myshara Solutions will only use this for internal purposes and that it will not be made public.</li>
                <li>Your replies will be recorded and will be used to support the study results of Myshara Solutions.</li>
                <li>You understand that you may exercise your rights under the GDPR such as your right to access, amend and or erase information provided by contacting info@mysharasolutions.com</li>
            </ul>

            Understanding these terms is important beacuse, for you to fill the questionnaire, you must accept these terms. 
        </p>

        <Copyright />
    </div>
  )
}

export default Terms_and_Conditions