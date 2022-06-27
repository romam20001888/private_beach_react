
export default function SvgWithXlink ({url,children,classMainBlock}){
    return(
        <>
            <div className={classMainBlock}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="img1" width="100%" height="100vh" viewBox="0 0 100% 100vh"  filter="url(#myFilter)" style={{position:"absolute",backgroundPosition: ' top left',background: 'url('+url+') no-repeat',backgroundSize: '100% 100vh'}}>
                    <defs>
                        <filter id="myFilter" >
                            <feTurbulence type="turbulence" baseFrequency="0.00000001" numOctaves="0.5" result="turbulence" >
                            <animate attributeName="baseFrequency" height="50%" dur="25s" repeatCount="20000" values="0.000001;0.005;0.000001;0.005;0.000001" />
                            </feTurbulence>
                            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="15" in="SourceGraphic" in2="turbulence" />
                        </filter>
                        </defs>
                </svg>
                {children}
            </div>
        </>
    )
}