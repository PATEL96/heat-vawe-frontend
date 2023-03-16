import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";


const Container=styled.div`

`

const Wrapper=styled.div`
  padding: 20px;
  ${mobile({ padding:"9px" })}

`

const Title=styled.h1`
  font-weight:300;
  text-align:center;
`

const Top=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 20px;
`;

const TopButton=styled.button`
  padding:10px;
  font-size:20px;
  border:${(props)=>props.type==="filled"&&"none"};
  Background-color:${(props)=>props.type==="filled"? `#714c93`: `#f7d400`};
  color:${(props)=>props.type==="filled"?`#f7d400`:`#714c93`};
  ${'' /* background-color:#714c93;
    color:#f7d400; */}
  ${mobile({ margin:"9px" })}


`

const TopTexts=styled.div`
    ${mobile({ display:"none" })}
`;

const TopText=styled.span`
    text-decoration:underline;
    cursoror:pointer;
    margin:0px 10px;
`;

const Bottom=styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({ flexDirection:"column" })}

`

const Info=styled.div`
  flex:3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin:30px 0;
  ${mobile({ flexDirection: "column" })}

 
`

const ProductDetail=styled.div`
  flex:2;
  display:flex;
  
`
const Image=styled.img`
    width:200px;
    
`
const Details=styled.div`
  display:flex;
  padding:10px;
  flex-direction:column;
  justify-content:space-around;
  list-style-type:none;

`

const ProductId=styled.li`
        margin:5px;
`

const ProductColor=styled.li`
  width:20px;
  height:20px;
  border-radius:50%;
  margin:5px;
  border:1px solid #f7d400 ; 
  Background-color:${(props)=>props.color} 
`

const ProductSize=styled.li`
        margin:5px;
`
const ProductPriceDetail=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 200px;
    ${'' /* align-items: center;
  justify-content: center; */}
`

const ProductAmountContainer = styled.li`
  display: flex;
  align-items: center;
  min-width: 200px;
  margin-bottom: 20px;
`;
const Header=styled.h3`
    font-size:20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

`;
const ProductAmountDetail = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

`;

const HR=styled.hr`
  background-color:#eee;
  border:none;
  width:100%;
  height:1px;

`

const Summary=styled.div`
  flex:1;
  border:0.5px solid #f7d400;
  border-radius:10px;
  padding:20px;
  height:50vh;
`

const SummryTitle=styled.h1`
  font-weight:200;
  
`
const SummryItem=styled.div`
  margin:30px 0;
  display:flex;
  justify-content:space-between;
  color:#72c4d9;
  font-weight:${(props)=>props.Type==="total"&&"900"};
  font-size:${(props)=>props.Type==="total"&&"24px"};
`
const SummryItemtext=styled.span`

`

const SummryItemPrice=styled.span`
    color:white;
    `
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:#714c93;
    color:#f7d400;
    border:0;
    font-weight:500px;
`

const Cart = () => {

//   const cart = useSelector((state) => state.cart);
//   const history = useNavigate();

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>SHOPPING BAG(2)</TopText>
                <TopText> YOUR WISHLIST!!</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>

                    
                      <Product>
                        <ProductDetail>
                            <Image src= "https://imgs.search.brave.com/aApEG4qgZBl1Mz4G7W5yOm1zQbq2HlY062sImOloua4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/Z1JYV1BLQnl6a1Zi/TFJ1T3Q4YnhnSGFG/aiZwaWQ9QXBp"/>
                            <Details>
                                <Header><b>Sexy Justsu</b></Header>
                                <ProductColor color="black"/>
                                <ProductSize>Size:<b> XXL</b></ProductSize>
                                <ProductId>ID:<b>12M333M000</b></ProductId>
                            </Details>
                        </ProductDetail>

                        <ProductPriceDetail>
                            <Details>
                                <Header>Each</Header>
                                <ProductId><b>₹ 550</b></ProductId>
                            </Details>
                        </ProductPriceDetail> 

                        <ProductAmountDetail>
                            <Details>
                                <Header>Quantity</Header>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                        <ProductAmount>1</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                            </Details>
                        </ProductAmountDetail>

                        <ProductPriceDetail>
                            <Details>
                                <Header>Price</Header>
                                <ProductId><b>₹ 550</b></ProductId>
                            </Details>
                        </ProductPriceDetail>
                     
                    </Product> 
                      <Product>
                        <ProductDetail>
                            <Image src= "https://imgs.search.brave.com/aApEG4qgZBl1Mz4G7W5yOm1zQbq2HlY062sImOloua4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/Z1JYV1BLQnl6a1Zi/TFJ1T3Q4YnhnSGFG/aiZwaWQ9QXBp"/>
                            <Details>
                                <Header><b>Sexy Justsu</b></Header>
                                <ProductColor color="black"/>
                                <ProductSize>Size:<b> XXL</b></ProductSize>
                                <ProductId>ID:<b>12M333M000</b></ProductId>
                            </Details>
                        </ProductDetail>

                        <ProductPriceDetail>
                            <Details>
                                <Header>Each</Header>
                                <ProductId><b>₹ 550</b></ProductId>
                            </Details>
                        </ProductPriceDetail> 

                        <ProductAmountDetail>
                            <Details>
                                <Header>Quantity</Header>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                        <ProductAmount>1</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                            </Details>
                        </ProductAmountDetail>

                        <ProductPriceDetail>
                            <Details>
                                <Header>Price</Header>
                                <ProductId><b>₹ 550</b></ProductId>
                            </Details>
                        </ProductPriceDetail>
                     
                    </Product> 
                    
                   
                    {/* {cart.products.map(product=>(
                      <Product>
                      <ProductDetail>
                      <Image src={product.img} />
                        <Details>
                            <ProductName><b>Product</b> {product.Title}</ProductName>
                            <ProductId><b>ID:</b>{product._id}</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        </Details>
                      </ProductDetail> 
                      <ProductPriceDetail>
                          <ProductAmountContainer>
                            <AddIcon/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <RemoveIcon/>
                          </ProductAmountContainer>
                          <ProductPrice>${product.price*product.quantity}</ProductPrice>
                      </ProductPriceDetail>
                      <HR/>
                    </Product> 
                    
                    ))
                    } */}



              </Info>
              <Summary>
                <SummryTitle>Order Summary</SummryTitle>
                <SummryItem>
                  <SummryItemtext>subtotal</SummryItemtext>
                  <SummryItemPrice>₹ 1000</SummryItemPrice>
                </SummryItem>
                <SummryItem>
                  <SummryItemtext>Estimated Shipping</SummryItemtext>
                  <SummryItemPrice>₹ 1000</SummryItemPrice>
                </SummryItem>
                <SummryItem>
                  <SummryItemtext>Shipping Discount</SummryItemtext>
                  <SummryItemPrice>₹ 5</SummryItemPrice>
                </SummryItem>
                <SummryItem Type="total">
                  <SummryItemtext >Total</SummryItemtext>
                  <SummryItemPrice >₹ 10000</SummryItemPrice>
                </SummryItem>
                <Button>Checkout</Button>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart