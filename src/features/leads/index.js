import moment from "moment"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getAuctionsContent } from "./auctionSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'
import SearchBar from "../../components/Input/SearchBar"


const TopSideButtons = ({applySearch}) => {

    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        applySearch(searchText)
    }, [searchText])


    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }))
    }

    return (
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} />
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Auctions() {
    const [filteredLeads, setFilteredLeads] = useState([])

    const { leads } = useSelector(state => state.lead)
    console.log("🚀 ~ file: index.js:29 ~ Auctions ~ leads:", leads)
    const dispatch = useDispatch()

    const removeFilter = () => {
        setFilteredLeads(leads)
    }

    const applyFilter = (params) => {
        let filteredTransactions = leads.filter((t) => { return t.location == params })
        setFilteredLeads(filteredTransactions)
    }

    const applySearch = (value) => {
        let filteredTransactions = leads.filter((t) => { return t.title.toLowerCase().includes(value.toLowerCase()) || t.title.toLowerCase().includes(value.toLowerCase()) })
        setFilteredLeads(filteredTransactions)
    }

    useEffect(() => {
        dispatch(getAuctionsContent())
    }, [])

    useEffect(() => {
        setFilteredLeads(leads)
    }, [leads])

    return (
        <>

        <TitleCard title="Latest auctions" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter} />}>
            {/* Auctions List in table format loaded from slice after api call */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Skills</th>
                                <th>Amount</th>
                                <th>Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredLeads.map((l, k) => {
                                    return (
                                        <tr key={k} className="cursor-pointer hover:contrast-200 hover:underline">
                                            <td>
                                                <NavLink end to={`/app/auctions/${k}`}>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-circle w-12 h-12">
                                                                <img src={l?.avatar} alt="Avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{l?.name}</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{l?.title}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{l?.skills?.map((skill, index) => <span key={index}>{`${skill} `}</span>)}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>${l?.minPrice?.value}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{moment(l?.date).format("D MMM")}</NavLink></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Auctions