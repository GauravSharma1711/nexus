import React from 'react'
import Image from "next/image";

const LogoType = () => {
  return (
    <div className=' flex items-center justify-around'>
        <span>
             <Image src="/amazon.png" alt="" width={124} height={48} />
        </span>
        <span>
 <Image src="/company2.png" alt="" width={126} height={48} />
        </span>
        <span>
<Image src="/company3.png" alt="" width={128} height={48} />
        </span>
        <span>
<Image src="/company4.png" alt="" width={145} height={48} />
        </span>
        <span>
          <Image src="/company5.png" alt="" width={148} height={48} />
        </span>
    </div>
  )
}

export default LogoType