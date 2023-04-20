import "../Style/profile.css"
import {People} from "./People"


const Profile = () =>{
    return(
        <div className="gridContainer">
            {People.map((person, index) => {
                return (
                        <li key={index}>
                            <div className="profile">
                                <div className="personinfo">
                                    <img src={person.picture} alt="profile" />
                                    <div className="personData">
                                        <p>{person.id}</p> 
                                        <div className="personName"> 
                                            <p>{person.title}. </p>
                                            <p>{person.firstName}</p>
                                            <p>{person.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </li>
                )
            })}
        </div>
    )
}
export default Profile;