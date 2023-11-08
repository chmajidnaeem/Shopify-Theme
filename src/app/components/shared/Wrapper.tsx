import React, {FC} from 'react'
const Wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-[1920px] mx-[45px]'>
        {children}
    </div>
  )
}

export default Wrapper