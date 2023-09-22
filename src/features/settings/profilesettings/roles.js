import { useState } from "react"
import { useDispatch } from "react-redux"

import TitleCardRole from "../../../components/Cards/TitleCardRole"
import { showNotification } from "../../common/headerSlice"


const INITIAL_INTEGRATION_LIST = [
    {name : "Recruiter profile", icon : "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", isActive : false, description : "As recruter you can take a part in auctions"},
    {name : "Candidate profile", icon : "https://cdn-icons-png.flaticon.com/512/124/124010.png", isActive : false, description : "As a candidate you can offer your services"},
]

function Roles(){

    const dispatch = useDispatch()

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


    const updateIntegrationStatus = (index) => {
        let integration = integrationList[index]
        setIntegrationList(
            integrationList.map((i, k) => {
                if(k===index) return {...i, isActive : !i.isActive}
                return {...i, isActive : false}
            })
        )

        dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "disabled" : "enabled"}` , status : 1}))
    }


    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                integrationList.map((i, k) => {
                    return(
                        <TitleCardRole key={k} title={i.name} topMargin={"mt-2"}>
                            
                            <p className="flex">
                                {i.description}
                            </p>
                            <div className="mt-6 text-right">
                                <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateIntegrationStatus(k)}/>
                            </div>
                            
                        </TitleCardRole>
                    )
                
                })
            }
            </div>
        </>
    )
}

export default Roles