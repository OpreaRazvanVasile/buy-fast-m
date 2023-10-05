import styled from "styled-components";

export const CheckoutContainer=styled.div`
width: 55%;
min-height: 90vh;
display: flex;

flex-direction: column;
align-items: center;
margin: 50px auto 0;
`
export const CheckoutHeader=styled.div`
width: 102%;
padding: 10px 0;
display: flex;
gap:3rem;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

`
export const HeaderBlock=styled.div`
text-transform: capitalize;
width: 23%;
margin-left:2vh ;

&:last-child {
  width: 8%;
}
`
export const SpanTotal=styled.span`
display:flex;
    
margin-top: 30px;
margin-left:auto;
font-size: 27px;
`


// .checkout-container {
//     width: 55%;
//     min-height: 90vh;
//     display: flex;
    
//     flex-direction: column;
//     align-items: center;
//     margin: 50px auto 0;
  
//     .checkout-header {
//       width: 102%;
//       padding: 10px 0;
//       display: flex;
//       gap:3rem;
//       justify-content: space-between;
//       border-bottom: 1px solid darkgrey;
  
//       .header-block  {
//         text-transform: capitalize;
//         width: 23%;
//         margin-left:2vh ;
  
//         &:last-child {
//           width: 8%;
//         }
//       }
//     }
  
//     .total {
//      display:flex;
    
//       margin-top: 30px;
//       margin-left:auto;
//       font-size: 27px;
//     }
//   }