import './Profile.css'; 
import images from './images';
function Profile() {
    return (
      <div className='Profile'>
        <div className='menu-container'>
          <div className='menu-trigger'>
            <img src={images.girl} />
          </div> 

          <div className='dropdown-menu'>
            <h3>Mag Anderson</h3> 
            <ul>
              <li>
              <i class="fa-solid fa-user" /> <p>My Profile</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}  


export default Profile