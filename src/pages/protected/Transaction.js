import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle, showNotification } from '../../features/common/headerSlice'
import { RECENT_TRANSACTIONS } from '../../utils/dummyData'
import { NavLink, useHref } from 'react-router-dom'

function InternalPage(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Auction" }))
    }, [])


    const href = useHref()
    const slug = href.slice(-1)
    const [trans, setTrans] = useState(RECENT_TRANSACTIONS[slug])
    
    const handleBid = (trans, event) => {
        dispatch(showNotification({message : `Your offer for ${trans.title} was submitted ` , status : 1}))
    }



    return (
        <>
            <div className="join pb-5">
                <NavLink to={`/app/auctions`} className="join-item btn">« go back</NavLink>
            </div>
            <div className="card card-side bg-base-100 shadow-xl p-10">
                <figure><img src={trans.avatar} alt="Avatar" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{trans.title}</h2>
                    <p>Name: {trans.name}</p>
                    <p>Skills:</p>
                    {trans.skills.map((skill, key) => (
                        <span key={key} className="badge">{skill}</span>
                    ))}
                    <div className="card-actions justify-end">
                        <kbd className="kbd kbd-lg">{trans.minPrice.value} {trans.minPrice.currency}</kbd>
                        <input type="number" placeholder="Your price" className="input input-bordered w-full max-w-xs" />
                        <button onClick={() => handleBid(trans)} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternalPage