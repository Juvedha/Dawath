import './index.css'

const TabDetails=props=>{
    const {tabDetails,changeActiveTabId,isActive}=props
    const {tabId,displayText}=tabDetails

    const className=isActive ? "active-tab" : ""

    const onClickTabId=()=>{
        changeActiveTabId(tabId)

    }
    return (
         <li className={`tab ${className}`} key={tabId} onClick={onClickTabId}>{displayText}</li>
    )
}
export default TabDetails