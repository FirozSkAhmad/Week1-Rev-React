import { useEffect, useState } from "react"

const MyselfF = (props) => {

    const { name } = props

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const [data, setData] = useState({})

    useEffect(() => {
        getUserData()
        const intervel = setInterval(() => console.log("setIntervel called FC"), 1000)
        return (
            () => {
                console.log("return called")
                return clearInterval(intervel)
            }
        )
    }, [])

    useEffect(() => {
        // console.log('useEffect called')
    }, [count])

    useEffect(() => {
        // console.log('useEffect called')
    }, [count2])

    useEffect(() => {
        // console.log('useEffect called')
    }, [count, count2])

    async function getUserData() {
        const data = await fetch("https://api.github.com/users/FirozSkAhmad")
        const json = await data.json()
        setData(json)
    }

    return (
        <>
            <h1>It's me functional component</h1>
            <h2>Name:{data.name}</h2>
            <h3>Count1:{count}</h3>
            <h3>Count2:{count2}</h3>
            <button onClick={() => setCount(0)}>Update Count</button>
        </>
    )
}

export default MyselfF