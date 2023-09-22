import moment from "moment"
import { useEffect, useState } from "react"
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"

const TopSideButtons = ({ removeFilter, applyFilter, applySearch }) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if (searchText == "") {
            removeAppliedFilter()
        } else {
            applySearch(searchText)
        }
    }, [searchText])

    return (
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} />
        </div>
    )
}


function Transactions() {


    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => { return t.location == params })
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => { return t.title.toLowerCase().includes(value.toLowerCase()) || t.title.toLowerCase().includes(value.toLowerCase()) })
        setTrans(filteredTransactions)
    }

    return (
        <>

            <TitleCard title="Latest auctions" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter} />}>

                {/* Team Member list in table format loaded constant */}
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
                                trans.map((l, k) => {
                                    return (
                                        <tr key={k} className="cursor-pointer hover:contrast-200 hover:underline">
                                                <td>
                                            <NavLink end to={`/app/auctions/${k}`}>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-circle w-12 h-12">
                                                                <img src={l.avatar} alt="Avatar" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{l.name}</div>
                                                        </div>
                                                    </div>
                                            </NavLink>
                                                </td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{l.title}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{l.skills.map((skill, index) => <span key={index}>{`${skill} `}</span>)}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>${l.minPrice.value}</NavLink></td>
                                            <td><NavLink end to={`/app/auctions/${k}`}>{moment(l.date).format("D MMM")}</NavLink></td>
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


export default Transactions