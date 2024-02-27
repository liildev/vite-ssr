import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const helmetContext = React.createContext({})

const HelmetProvider = (props: any) => {

    const [title, setTitle] = useState("Hello")
    const [meta, setMeta] = useState([])
    const [link, setLink] = useState([])
    const [script, setScript] = useState([])
    const [style, setStyle] = useState<string | []>("")

    return (
        <helmetContext.Provider value={{ title, setTitle, meta, setMeta, link, setLink, script, setScript, style, setStyle }}>
            <Helmet>
                <meta property="og:title" content="Home Page - Vite SSR + React" key="ogtitle" />
                <meta property="og:description" content="description" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Liil Dev" key="ogsitename" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:width" content="360" />
                <meta property="og:image:type" content="image/jpeg" />
                <link rel="icon" href="/vite.svg" sizes="any" type="image/svg+xml" />
                {title && <title>{title}</title>}
                {meta && meta.map((m: any) => <meta {...m} />)}
                {link && link.map((l: any) => <link {...l} />)}
                {script && script.map((s: any) => <script {...s} />)}
                {style && (typeof style === 'string') && <style>{style}</style>}
                {style && Array.isArray(style) && style.map((s: any) => <style>{s}</style>)}
            </Helmet>

            {props.children}
        </helmetContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export { helmetContext }
export default HelmetProvider;
