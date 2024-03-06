import { Image,Avatar } from '@nextui-org/react'
import logo from '../assets/images/logo.png'

const Logo = ({footer}) => {
  return (
    <Avatar
      src={logo}
      alt="Logo"
      isBordered   
      className={footer=== true ? 'w-[120px] h-[120px]': "w-11"}
      radius="lg"
      color="secondary"
   
    />
  )
}

export default Logo