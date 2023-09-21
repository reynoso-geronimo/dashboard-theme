import React  from 'react'
import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop";
import Footer from './Footer';
import Table from "./table/Table";
import "../assets/css/contentWrapper.css";


function ContentWraper ({userInfo,productInfo, ticketInfo}){

   return(
<>
<div id="content">
<TopBar/>

<ContentRowTop  userInfo={userInfo} productInfo={productInfo} ticketInfo={ticketInfo}/>


<Table  data={productInfo.products}
              header={["id", "name", "description", "detail", "category"]}  />

<Table  data={userInfo.users}
              header={["id", "name", "email", "detail"]}/>
<Footer/>
</div>



</>
)
}


export default ContentWraper