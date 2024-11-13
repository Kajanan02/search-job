import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from "react";

const jobListings = [
    {
        "title": "Frontend Developer",
        "company": "Tech Corp",
        "description": "Looking for a skilled frontend developer experienced in HTML, CSS, and JavaScript frameworks like React and Vue.",
        "location": "Colombo",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "Backend Developer",
        "company": "Dev Solutions",
        "description": "Join our team to build robust backend solutions with Node.js, Python, and cloud technologies.",
        "location": "Remote",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "UX/UI Designer",
        "company": "Design Studio",
        "description": "Seeking a creative UX/UI designer with a strong portfolio in mobile and web design.",
        "location": "Galle",
        "type": "Part-Time",
        "applyLink": "#"
    },
    {
        "title": "Data Scientist",
        "company": "Data Insights Inc.",
        "description": "Data-driven problem solver with experience in Python, R, and machine learning.",
        "location": "Kandy",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "Project Manager",
        "company": "Global Solutions",
        "description": "Experienced project manager with strong organizational skills and proficiency in Agile methodologies.",
        "location": "Remote",
        "type": "Contract",
        "applyLink": "#"
    },
    {
        "title": "Marketing Specialist",
        "company": "Brandworks",
        "description": "Creative marketing specialist skilled in digital marketing, social media, and content creation.",
        "location": "Colombo",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "Product Manager",
        "company": "InnoTech",
        "description": "Seeking a product manager with experience in product lifecycle management and Agile frameworks.",
        "location": "Jaffna",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "Network Engineer",
        "company": "ConnectNow",
        "description": "Network engineer needed for managing and optimizing network infrastructure. Experience with Cisco preferred.",
        "location": "Vavuniya",
        "type": "Full-Time",
        "applyLink": "#"
    },
    {
        "title": "HR Coordinator",
        "company": "PeopleFirst",
        "description": "Human Resources Coordinator with excellent communication and organizational skills.",
        "location": "Remote",
        "type": "Part-Time",
        "applyLink": "#"
    },
    {
        "title": "DevOps Engineer",
        "company": "Tech Solutions",
        "description": "DevOps Engineer with experience in CI/CD pipelines, Docker, Kubernetes, and cloud environments.",
        "location": "Colombo",
        "type": "Full-Time",
        "applyLink": "#"
    }
]


function App() {

    const [filteredJobs, setFilteredJobs] = useState(jobListings);


    function handleSearch(event) {
        const searchValue = event.target.value;
        if(searchValue === '') {
            setFilteredJobs(jobListings);
        } else {
            const filteredJobs = jobListings.filter(job => {
                return job.title.toLowerCase().includes(searchValue.toLowerCase()) || job.company.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredJobs(filteredJobs);
        }
    }


    return (
        <div>
            <div className="container my-4">
                <h2 className="text-center mb-4">Job Listings</h2>
                <div className="row">

                    <label htmlFor={"search"} className="form-label">Search</label>
                    <input type="text" id={"search"} onChange={handleSearch}  className="form-control mb-5" placeholder="Search job listings..." />

                    {filteredJobs.map((job, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{job.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                                    <p className="card-text">{job.description}</p>
                                    <p className="text-muted mb-2"><i className="bi bi-geo-alt-fill"></i>{job.location}</p>
                                    <p className="text-muted"><i className="bi bi-clock-fill"></i>{job.type}</p>
                                    <a href={job.applyLink} className="btn btn-primary">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default App;
