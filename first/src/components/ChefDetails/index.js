import './index.css'

const chefDetailsList=[
    {
       imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465148/team-1_1_zuo1qx.jpg",
       name:"Mark Angelila" ,
       description:"Cras senunc massa quisque tempor dolor sit amet",
    },
    {
       imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465104/team-2_1_mc8ggl.jpg",
       name:"Angel Meskat" ,
       description:"Cras senunc massa quisque tempor dolor sit amet",
    },
    {
       imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465067/team-3_1_lltcf3.jpg",
       name:"Jan Doe" ,
       description:"Cras senunc massa quisque tempor dolor sit amet",
    },
    {
       imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465034/team-4_1_xkerda.jpg",
       name:"Angel Di Maria",
       description:"Cras senunc massa quisque tempor dolor sit amet",
    },
    {
       imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693464999/team-5_1_zkztfw.jpg",
       name:"Park Ji Sung" ,
       description:"Cras senunc massa quisque tempor dolor sit amet"
    },
]

const ChefDetails=()=>(
    <div className="container">
        <div className='our-chefs'>
            <h1 className='chef-heading'>Our Chefs</h1>
            <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465195/red_seperator_1_s4evu6.png" alt="separator" />
        </div>
        <ul className="chef-details">
            {chefDetailsList.map(eachChef=>(
                <li className='chef-item-container' key={eachChef.name}>
                    <img src={eachChef.imageUrl} className="chef-image" alt={eachChef.name}/> 
                    <h1 className="chef-name">{eachChef.name}</h1>
                    <p className='chef-description'>{eachChef.description}</p>
                </li>
            ))}
        </ul>
    </div>
)
export default ChefDetails

