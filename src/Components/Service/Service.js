import React from 'react';
import './Service.css';
import images from '../../images/dr-rahman-removebg.png';

const Service = () => {
    return (
        <div className='service'>
            <div>
                <img src={images} alt="" />
                <h3>Interventional cardiology</h3>
                <p>
                    We believe you deserve nothing less than the very best in cardiovascular care. That is why Labaid has assembled a team of superb cardiologists, cardiac surgeons, and special trained nurse, who are skilled in providing the newest available diagnostics and treatments. Our doctors have the expertise to personalize the right treatment plan for you, whether you're struck with a medical emergency like a heart attack or you're dealing with an ongoing issue such as arrhythmia.
                    Cardiovascular disease is a general term referring to conditions that affect the heart and blood vessels and cardiology is the medical specialty that treats these diseases.
                </p>
                <p><small>Any operation depend on condition</small></p>
                <p><small>Visit: 1200</small></p>
                <button>Please check out</button>
            </div>
            <div>
                <img src={images} alt="" />
                <h3>Medicine</h3>
                <p>
                    Our department embodies excellence, inspiration and empowerment in caring for the patients. Staff of the various specialties are world leading experts in their respective fields.
                    To maintain and further develop clinical service by providing superior patient care, by always striving to remain a leading referral centre for patients, by promoting the development and implementation of innovative advances in clinical management.
                    Cardiovascular disease is a general term referring to conditions that affect the heart and blood vessels and cardiology is the medical specialty that treats these diseases.
                </p>
                <p><small>Any operation depend on condition</small></p>
                <p><small>Visit: 1200</small></p>
                <button>Please check out</button>
            </div>
            <div>
                <img src={images} alt="" />
                <h3>Internal Medicine</h3>
                <p>
                    A Comprehensive Internal Medicine Center become operational at the aim to provide an International standard treatment facility to satisfy and meet the demands of our Patients. Department of Internal Medicine focuses on the diagnosis, treatment, and prevention of non-surgical conditions in adults. is one of the leading hospitals in the country to be providing advanced and full Internal Medicine treatment facilities under one roof. The department provides a wide range of high quality cross-specialty health care services, including physical examinations, preventive screenings and immunizations, urgent care for medical conditions, and referrals to surgical specialists when appropriate.
                </p>
                <p><small>Any operation depend on condition</small></p>
                <p><small>Visit: 1200</small></p>
                <button>Please check out</button>
            </div>
        </div>
    );
};

export default Service;
