import { FC } from "react";

interface IconProps {
  className?: string;
  icon: string;
}

const Icon : FC<IconProps> = ({ icon, className=''}) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {icon}
    </span>
  )
}

export default Icon;