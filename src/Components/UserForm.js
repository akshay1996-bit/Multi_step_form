import React, {useState} from 'react';

import FormDataContext from '../context/FormContext';
import UserDetails from './UserDetails';
import ProDetails from './ProDetails';
import ConfirmPage from './ConfirmPage';
import SuccessPage from './SuccessPage';

export default function UserForm(){

const [step,setStep] = useState(1);
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('')
const [occupation,setOccupation] = useState('');
const [city,setCity] = useState('');
const [bio,setBio] = useState('');

const prevStep = ()=>{
    setStep(step-1);
}

const nextStep = ()=>{
    setStep(step+1);
}

const resetForm = () =>{
    setStep(1);
    setFirstName('');
    setLastName('');
    setEmail('');
    setOccupation('');
    setCity('');
    setBio('');
}
const values = {
        firstName,
        lastName,
        email,
        occupation,
        city,
        bio,
        setFirstName,
        setLastName,
        setEmail,
        setOccupation,
        setCity,
        setBio,
        nextStep,
        prevStep,
        resetForm
};

switch (step){
    case 1:
        return (
                <FormDataContext.Provider value={values}>
                <UserDetails/>
                </FormDataContext.Provider>    
        );

        case 2:
        return (
                <FormDataContext.Provider value={values}>
                <ProDetails/>
                </FormDataContext.Provider>    
        );


        case 3:
        return (
                <FormDataContext.Provider value={values}>
                <ConfirmPage/>
                </FormDataContext.Provider>    
        );


        case 4:
        return (
                <FormDataContext.Provider value={values}>
                <SuccessPage/>
                </FormDataContext.Provider>    
        );



        default:
                return <h2>Error</h2>
}


}


