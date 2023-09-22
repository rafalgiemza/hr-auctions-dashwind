import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { RECENT_TRANSACTIONS } from '../../utils/dummyData'
import { useHref } from 'react-router-dom'
import TitleCard from '../../components/Cards/TitleCard'
import InputText from '../../components/Input/InputText'
import TextAreaInput from '../../components/Input/TextAreaInput'
import ToogleInput from '../../components/Input/ToogleInput'

function InternalPage(props){
    console.log("🚀 ~ file: Transaction.js:6 ~ InternalPage ~ props:", props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Auction"}))
      }, [])


    const href = useHref()
    const slug = href.slice(-1)
    const [trans, setTrans] = useState(RECENT_TRANSACTIONS[slug])
    console.log("🚀 ~ file: Transaction.js:15 ~ InternalPage ~ trans:", trans)


    return(
        <div className="card card-side bg-base-100 shadow-xl p-10">
            <figure><img src={trans.avatar} alt="Avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title">{trans.title}</h2>
                <p>Name: {trans.name}</p>
                <p>Skills:</p>
                {trans.skills.map((skill, key) => (
                    <span key={key} className="badge">{skill}</span>
                ))}
                <span className="badge">Badge</span>
                <div className="card-actions justify-end">
                <kbd className="kbd kbd-lg">{trans.minPrice.value} {trans.minPrice.currency}</kbd>
                <input type="text" placeholder="Your price" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
    )
}

export default InternalPage