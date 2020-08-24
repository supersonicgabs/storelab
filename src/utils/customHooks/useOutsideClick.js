import {useEffect} from 'react'

const useOutsideClick = (ref, callback) =>{
    
    useEffect(()=>{
        const handleClick = (e) =>{
            if(!ref.current || ref.current.contains(e.target)){
                return
            }
            callback(e)
        }
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback])
}

export default useOutsideClick
