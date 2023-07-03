import profileImg from "public/Images/profileImg.jpg";
import {faHeart, faStar, faBell, faEnvelope} from "react-icons/fa"
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';


const CircleIcons = () => {
    const icons = [faHeart, faStar, faBell, faEnvelope];
  
    const renderIcons = () => {
      const totalIcons = icons.length;
      const angle = 360 / totalIcons;
  
      return icons.map((icon, index) => {
        const rotation = angle * index;
        const iconStyle = {
          transform: `rotate(${rotation}deg)`,
        };
  
        return (
          <div
            className="circle-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={iconStyle}
            key={index}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        );
      });
    };
  
    return (
      <div className="circle-icons-container relative flex flex-col items-center justify-center">
        <div className="circle-icons-image absolute z-10 flex items-center justify-center w-40 h-40 rounded-full overflow-hidden">
          <img src={profileImg} alt="Circle" className="w-full h-full object-cover" />
        </div>
        <div className="circle-icons relative w-40 h-40">{renderIcons()}</div>
      </div>
    );
  };
  
  
  export default CircleIcons;