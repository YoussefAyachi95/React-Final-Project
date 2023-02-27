import {useState, useRef, useEffect} from 'react';

export default function useNearScreen() {
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    useEffect(() => {
        const onChange = (entries, observer) => {
            //console.log(entries)
            const element = entries[0]
            
            if (element.isIntersecting){
                setShow(true)
                //once we change our state, stop observing
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin:'100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()

    }, [])

    return {show, elementRef}

}
