import {Component} from 'react'
import TabDetails from '../TabDetails'
import './index.css'
/*<img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465656/menu_2_1_rs4acr.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465569/menu_3_1_dmu0z0.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465537/menu_4_1_fr16sd.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465502/menu_5_1_et17l4.jpg" />
    <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465460/menu_6_1_mqeqje.jpg" />
*/
const menuItems=[
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465618/menu_1_1_hdrm0j.jpg",
        id:1,
        category:["ALL","LUNCH","BREAKFAST"],
        cost:"$ 20.00",
    },
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465656/menu_2_1_rs4acr.jpg",
        id:2,
        category:["ALL","BREAKFAST","DINNER"],
        cost:"$ 70.00",

    },
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465569/menu_3_1_dmu0z0.jpg",
        id:3,
        category:["ALL","SNACKS"],
        cost:"$ 120.00",
    },
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465537/menu_4_1_fr16sd.jpg",
        id:4,
        category:["ALL","SNACKS"],
        cost:"$ 100.50",
    },
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465502/menu_5_1_et17l4.jpg",
        id:5,
        category:["ALL","DINNER","COFEE"],
        cost:"$ 80.50",
    },
    {
        imageUrl:"https://res.cloudinary.com/dvrzid4co/image/upload/v1693465460/menu_6_1_mqeqje.jpg",
        id:6,
        category:["ALL","LUNCH","COFEE"],
        cost:"$ 50.50",
    }
]

const tabItems=[
    {
        displayText:"ALL",
        tabId:"ALL"
    },
    {
        displayText:"BREAKFAST",
        tabId:"BREAKFAST"
    },
    {
        displayText:"LUNCH",
        tabId:"LUNCH"
    },
    {
        displayText:"DINNER",
        tabId:"DINNER"
    },
    {
        displayText:"COFEE",
        tabId:"COFEE"
    },
    {
        displayText:"SNACKS",
        tabId:"SNACKS"
    }
    
]

class MenuItems extends Component{

    state={activeTabId:tabItems[0].tabId}

    changeActiveTabId=tabId=>{
        this.setState({activeTabId:tabId})
    }
    
    renderTabDetails=()=>{
        const {activeTabId}=this.state
        console.log(activeTabId)
        const menuItemsList=menuItems.filter(eachMenuItem=>eachMenuItem.category.includes(activeTabId))
        console.log(menuItemsList)
        return (
            <ul className='menu-items-list'>
                {menuItemsList.map(eachMenu=>(
                    <li className='menu-item'>
                        <img src={eachMenu.imageUrl} alt="menu" className='menu'/> 
                        <div>
                            {this.renderListItems()}
                        </div>
                        <div>
                            <h1 className='cost'>{eachMenu.cost}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        )
        
        
    }

    renderListItems=()=>(
        <div className='list-items-container'>
            <h1>Cupcake Recipes</h1>
            <div className='item-container'>
                <div className='items'>
                    <p>- JuiceFruit</p>
                    <p>- Vegetables</p>
                    <p>- Tamato</p>
                </div>
                <div className='items'>
                    <p>- Checken</p>
                    <p>- Milk</p>
                    <p>- Chilli</p>
                </div>
                <div className='items'>
                    <p>- Cherry</p>
                    <p>- Potato</p>
                    <p>- Sesame</p>
                </div>
            </div>
        </div>
    )

    render(){
        const {activeTabId}=this.state 
        return (
            <div className="menu-container">
                <h1 className='heading'>Today's Menu</h1>
                <img src="https://res.cloudinary.com/dvrzid4co/image/upload/v1693465195/red_seperator_1_s4evu6.png" alt="separator" className='red-separator'/> 
                <ul className='tab-items'>
                    {tabItems.map(eachTab=>(
                        <TabDetails key={eachTab.tabId} tabDetails={eachTab} changeActiveTabId={this.changeActiveTabId} isActive={activeTabId===eachTab.tabId} />
                    ))}
                </ul> 
                {this.renderTabDetails()}
            </div>

        )
    }
}
export default MenuItems