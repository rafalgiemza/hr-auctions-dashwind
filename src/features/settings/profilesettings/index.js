import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import Roles from "./roles"

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Profile Settings" topMargin="mt-2">
                <div>
                    <h1 className="p-2">Choose your profile role!</h1>
                    <Roles />
                </div>
                <div className="divider" ></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue="John Doe" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email" defaultValue="johndoe@example.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Position" defaultValue="CEO" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Company name" defaultValue="Google" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings