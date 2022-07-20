import { useEffect, useState } from "react"

const useResize = ()=>{
    const [size, setSize] = useState({
        width: innerWidth,
        height: innerHeight
    })

    function handleResize(){
        setSize({
            ...size,
            width: innerWidth,
            height: innerHeight
        })
    }


    useEffect(()=>{
        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return {size}
}

export default useResize;