/*eslint-disable*/
import { useState, useEffect } from 'react'
import Map from './Map';
import Header from './Header';
import Footer from './Footer';

export default function Allmap() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
        const { events } = await res.json()

        setEventData(events)
        setLoading(false)
        }

        fetchEvents()
    }, [])
    return (
        <>
        <Header />
        <Map eventData={eventData} />
        <Footer />
        </>
    )
}
