import { useEffect, useRef } from "react";

export default function useTitle ({title}) {
    const prevTitle = useRef(document.title)

    useEffect(() => {
        const firstTitle = prevTitle.current
        document.title = `${title} | Iffy`;  

        return () => document.title = firstTitle
    }, [title])
}