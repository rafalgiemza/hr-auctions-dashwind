import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../auctionSlice"

const INITIAL_LEAD_OBJ = {
    title: "",
    skills: "",
    price: ""
}

function AddAuctionModalBody({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if (leadObj.title.trim() === "") return setErrorMessage("First Name is required!")
        else if (leadObj.price.trim() === "") return setErrorMessage("Email is required!")
        else {
            let newLeadObj = {
                "id": 7,
                "name": "Alex",
                "minPrice": {
                    value: leadObj.price
                },
                "title": leadObj.title,
                "skills": leadObj.skills.trim().split(','),
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }
            dispatch(addNewLead({ newLeadObj }))
            dispatch(showNotification({ message: "New auction added!", status: 1 }))
            closeModal()
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLeadObj({ ...leadObj, [updateType]: value })
    }

    return (
        <>

            <InputText type="text" defaultValue={leadObj.title} updateType="title" containerStyle="mt-4" labelTitle="Title" updateFormValue={updateFormValue} />

            <InputText type="text" defaultValue={leadObj.skills} updateType="skills" containerStyle="mt-4" labelTitle="Skills" updateFormValue={updateFormValue} />

            <InputText type="number" defaultValue={leadObj.price} updateType="price" containerStyle="mt-4" labelTitle="Price" updateFormValue={updateFormValue} />


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddAuctionModalBody