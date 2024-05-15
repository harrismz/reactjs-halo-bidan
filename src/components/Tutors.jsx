import '../styles/Tutor.css'

function Tutors(props) {
  return (
    <div className="tutor-list">
        {
            props.tutorsList.map((tutor,index) => {
                return (
                    <div className="kartu-tutor" key={index}>
                        <img src={tutor.image}/>
                        <p>{tutor.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tutors
