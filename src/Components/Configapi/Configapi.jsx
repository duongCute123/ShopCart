import { useEffect, useState } from "react";
export const UseFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const Fetch = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error);
            }
        }
        Fetch()
    }, [url])
    return data
}
export default UseFetch