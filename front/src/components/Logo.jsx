import { Image } from '@nextui-org/react'
import logo from '../assets/images/logo.png'

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={45}
      className='border-1'
    />
  )
}

export default Logo