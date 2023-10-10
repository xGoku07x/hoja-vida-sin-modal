
import { IconType } from "react-icons";

interface SocialLink {
    linkRedSocial: string;
    ImageIcon:IconType;
  }

const RedSocial = ({ImageIcon, linkRedSocial}: SocialLink) => {
    return(
        <div className="flex w-16 bg-teal-700 p-2 text-center items-center rounded-full mt-5 ">
            <a href={ linkRedSocial}>
            <ImageIcon size={50} />
            </a>
            
        </div>
    )
}

export {RedSocial};