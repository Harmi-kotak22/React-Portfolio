import './Experience.css'
const Experience = () => {
    return (
        <div>
            <div className="experiences">
                <div className="experiences-title">
                    <h1>
                        Experience
                    </h1>
                </div>
            </div>
            <div className="experience-sections">
                <li>
                    <h3>
                        Technical Associate at Computer Society Of India
                    </h3>
                    <div className="experience-list">
                        <ul>

                            <li>Hosted Pointers Pe Charcha Event </li>
                            <li>Coordinated the event of about 130+ participants on virtual platform diving deep into the concept of pointer</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h3>
                        Junior Associate at Computer Society Of India
                    </h3>
                    <div className="experience-list">
                        <ul>
                            <li>Led the event Semiconductor Saga</li>
                            <li> Coordinated the event  of about 160+ participants and team from planning to execution</li>
                        </ul>
                    </div>
                </li>    
            </div>
        </div>
    );
}

export default Experience
