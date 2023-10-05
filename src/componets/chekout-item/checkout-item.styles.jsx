import styled from "styled-components";

export const CheckoutItemContainer=styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 22px;
align-items: center;

`
export const ImgContainer=styled.div`
width: 23%;
padding-right: 20px;

`
export const Image=styled.img`
width: 100%;
height: 100%;
`
export const SpanName=styled.span`
width: 23vh;
`
export const SpanPrice=styled.span`
width: 23vh
`
export const SpanTotal=styled.span``
export const SpantTotalPrice=styled.span`
width: 26.5vh;
color:rgb(119, 119, 119) ;
 font-weight:549 ;
`
export const SpanQuantity=styled.span`
margin: 0 10px;
`
export const QuantityContainer=styled.div`
display: flex;
flex-direction:row;
width: 23vh

`
export const Arrow=styled.div`
display:flex ;
cursor: pointer;
transition:all;
&:hover{
    color:rgb(135, 133, 133) ;
   

}
`
export const RemoveButton=styled.div`
padding-left: 12px;
  cursor: pointer;
      &:hover{
        color:rgb(101, 101, 101) ;
       

    }
`
   
  //  .checkout-item-container {
   
  //   .image-container {
  //     width: 23%;
  //     padding-right: 20px;
  
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  //   .name,
  //   .quantity,
  //   .price ,.total-price{
  //     width: 23vh;
      
  //   }
  //   .total-price{
  //       width: 26.5vh;
  //       color:rgb(119, 119, 119) ;
  //       font-weight:549 ;
  //   }
  
  //   .quantity {
  //     display: flex;
  //     flex-direction:row;
   
  //     .arrow {
  //       display:flex ;
  //       cursor: pointer;
  //       transition:all;
  //       &:hover{
  //           color:rgb(135, 133, 133) ;
           

  //       }
     
  //     }
  
  //     .value {
  //       margin: 0 10px;
  //     }
  //   }
  
  //   .remove-button {
  //     padding-left: 12px;
  //     cursor: pointer;
  //     &:hover{
  //       color:rgb(101, 101, 101) ;
       

  //   }
  //   }
  // }
  