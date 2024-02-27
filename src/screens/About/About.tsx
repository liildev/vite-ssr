import useHelmet from '@hooks/useHelmet';
import React, { useEffect } from 'react';

const About: React.FC<AboutProps> = (props) => {

    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle("About")
        helmet.setMeta([{ property: "og:title", content: "About" }, { property: "og:description", content: "about desc" }])
    },[helmet])

    return (
        <>
            <h1>About Us</h1>
        </>
    )
}

interface AboutProps {
    [key: string]: any
}

export default About;
