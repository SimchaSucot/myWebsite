import "./Header.css";
import icon1 from "/myIcon/icon.png";
import icon2 from "/myIcon/icon2.jpg";
import icon3 from "/myIcon/icon3.jpg";
import icon4 from "/myIcon/icon4.jpg";
import icon5 from "/myIcon/icon5.jpg";
import icon6 from "/myIcon/icon6.jpg";
import icon7 from "/myIcon/icon7.jpg";

let arr = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
let icon = arr[Math.floor(Math.random() * 7)];

function Header() {
  return (
    
      <div className="header">
        <img src={icon} alt="" className="myImg" />
        <h1 className="name">Simcha Sucot - software developer</h1>
      </div>
    
  );
}
export default Header;
