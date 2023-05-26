import React from "react";
import {
  AccountParent, 
  Wrapper,
  PersonalInfoWrapper,
  PersonalInformationParent,
  Heading,
  NavBarContainer
} from "./account.styles.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import { sideBarLinks } from "./account.routes.js";
import Navbar from "../../components/navbar/Navbar.js";



const Account = () => {
  

return (
  <AccountParent>
     <Sidebar routes={sideBarLinks} />
    <Wrapper>
    <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      <div
        className=""
        style={{
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <PersonalInformationParent>
          <PersonalInfoWrapper>
            <Heading>Personal Information</Heading>

            
          </PersonalInfoWrapper>
        </PersonalInformationParent>





      </div>







    </Wrapper>








  </AccountParent>




)


}


export default Account;