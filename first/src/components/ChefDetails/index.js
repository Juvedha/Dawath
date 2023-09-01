import './index.css'
/*
<img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693466120/about_sign_1_bxf7ns.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693466080/blog-1_1_cpmdmv.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693466044/blog-2_1_k84yj0.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693466007/blog-3_1_yynwjj.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465899/Footer_background_1_o1la80.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465704/main_logo_black_1_y9jk77.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465739/main_logo_1_vedzlr.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465656/menu_2_1_rs4acr.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465569/menu_3_1_dmu0z0.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465537/menu_4_1_fr16sd.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465502/menu_5_1_et17l4.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465460/menu_6_1_mqeqje.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465362/our_story_background_1_xve0jl.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465325/promo_slide_1_1_xvzh1m.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465276/promo_slide_2_1_elndpn.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465233/promo_slide_3_1_w9xyxv.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465195/red_seperator_1_s4evu6.png" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465148/team-1_1_zuo1qx.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465104/team-2_1_mc8ggl.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465067/team-3_1_lltcf3.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465034/team-4_1_xkerda.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693464999/team-5_1_zkztfw.jpg" />

*/ 

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
