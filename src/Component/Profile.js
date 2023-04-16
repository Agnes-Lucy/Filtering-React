import ID from './ID';
import "../Style/profile.css"
import Name from './Name';
import image from '../images/77.jpg'
import image2 from '../images/15.jpg'
import image3 from '../images/18.jpg'
import image4 from '../images/Sohan.jpg'
import image5 from '../images/10.jpg'
import image6 from '../images/3.jpg'
import image7 from '../images/75.jpg'
import image8 from '../images/45.jpg'
import image9 from '../images/57.jpg'
import image10 from '../images/24.jpg'

const Profile = (person) => {
    console.log (person)
    return (
        <div className='main' >
            <div className='profileContainer'>      
                <div className='personProfile'>
                    <img src={image} alt = 'Charlotte'/>
                    <div className='personData'>
                        <ID number = {"60d0fe4f5311236168a109f5"}/>
                        < Name title={"ms."} firstname={ "Charlotte"}  lastname={"Legrand"}/>
                    </div>
                </div>

                <div className='personProfile'>
                    <img src={image2} alt='Madison'/>
                    <div className='personData'>
                        <ID number = {"60d0fe4f5311236168a109f6"}/>
                        < Name title={"miss."} firstname={ "Madison"}  lastname={"Ambrose"}/>
                    </div>
                </div>
            </div>

            <div className='profileContainer'>
                <div className='personProfile'>
                    <img src={image3} alt='Ann'/>
                    <div className='personData'>
                        <ID number = {"f660d0fe4f5311236168a109fa"}/>
                        < Name title={"ms."} firstname={ "Ann"}  lastname={"Madson"}/>
                    </div>  
                </div>
            
                 <div className='personProfile'>
                    <img src={image4} alt='Sohan'/>
                    <div className='personData'>
                        <ID number ={"60d0fe4f5311236168a109fb"} />
                        < Name title={"mr"} firstname={ "Sohan"}  lastname={"Pierre"}/>
                    </div>
                </div>
            </div>

            <div className='profileContainer'>
                <div className='personProfile'>
                    <img src={image5} alt='Gonzaga'/>
                    <div className='personData'>
                        <ID number = {"60d0fe4f5311236168a109fc"}/>
                        < Name title={"mr."} firstname={ "Gonzaga"}  lastname={"Riberio"}/>
                    </div>  
                </div>
            
                <div className='personProfile'>
                    <img src={image6} alt='Josefina'/>
                    <div className='personData'>
                        <ID number ={"60d0fe4f5311236168a109ff"} />
                        < Name title={"mrs"} firstname={ "Josefina"}  lastname={"Calvo"}/>
                    </div>
                </div>
            </div>

            <div className='profileContainer'>
                <div className='personProfile'>
                    <img src={image7} alt='Els'/>
                    <div className='personData'>
                        <ID number = {"60d0fe4f5311236168a10a00"}/>
                        < Name title={"mrs."} firstname={ "Els"}  lastname={"Ijsseldijk"}/>
                    </div>  
                </div>
            
                <div className='personProfile'>
                    <img src={image8} alt='Jesus'/>
                    <div className='personData'>
                        <ID number ={"60d0fe4f5311236168a10a01"} />
                        < Name title={"mr"} firstname={ "Jesus"}  lastname={"Riley"}/>
                    </div>
                </div>
            </div>

            <div className='profileContainer'>
                <div className='personProfile'>
                    <img src={image9} alt='Andri'/>
                    <div className='personData'>
                        <ID number = {"60d0fe4f5311236168a10a03"}/>
                        < Name title={"mr"} firstname={ "Andri"}  lastname={"Leclerc"}/>
                    </div>  
                </div>
            
                <div className='personProfile'>
                    <img src={image10} alt='Konsta'/>
                    <div className='personData'>
                        <ID number ={"60d0fe4f5311236168a10a04"} />
                        < Name title={"mr"} firstname={ "Konsta"}  lastname={"Manninen"}/>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Profile;