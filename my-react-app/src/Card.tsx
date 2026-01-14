import profilePic from './assets/images/20241113_135342.jpg';


function Card() {

  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2>Otieno Job</h2>
      <p>I am a software developer and I love to code.</p>
    </div>
  );

}

export default Card;