import {useEffect,useState,React} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';
import photo from "../images/photo.jpg"
import { useLocation } from "react-router-dom";
import { Products } from "../Data";
// import {publirequest} from "../axios";
// import {addProduct} from "../redux/cartRedux";
// import { useDispatch } from "react-redux";


const Container=styled.div`
    color:white
`

const Wrapper=styled.div`
  padding:50px;
  display:flex;
  ${mobile({padding:"10px", flexDirection: "column" })}
`
const Wrapper2=styled.div`
  padding:50px;
  display:flex;
  flex-wrap:wrap;
  ${mobile({padding:"10px", flexDirection: "column" })}
`

const ImgContainer=styled.div`
    flex:1;
    `

const Image=styled.img`
        width:100%;
        height:90vh;
        object-fit:cover;
        ${mobile({ height:"40vh" })}
`

const InfoContainer=styled.div`
    flex:1;
    padding:0 50px;
    ${mobile({ padding:"10px" })}

`

const Title=styled.h1`
   

`

const Desc=styled.p`
      margin:20px 0;

`

const Strike=styled.span`
      font-size:20px;
      color:grey;

`

const Price=styled.span`
      font-weight:100;
      font-size:40px;
      color:#72c4d9;
`

const FilterContainer=styled.div`
        display:flex;
        justify-content:space-between;
        width:50%;
        margin:30px 0;
        ${mobile({ width:"100%" })}


`

const Filter=styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0 5px;
    cursor:pointer;
    border:#714c93 solid 2px;
`

const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
    background-color:#714c93;
    color:#f7d400;
    border-radius:10%;
    border:0;

`

const FilterSizeOption=styled.option`

`

const AddContainer=styled.div`
      display:flex;
      width:50%;
      align-items:center;
      justify-content:space-between;
      ${mobile({ width:"100%" })}



`

const AmountContainer=styled.span`
    display:flex;
      align-items:center;
      font-weight:700;
      text-align:center;
      &:hover{
        cursor:not-allowed;
      }
      
`

const Amount=styled.span`

  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid #714c93;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 5px;
  color:#f7d400;

`

const Button=styled.button`
      padding:15px;
      cursor:pointer;
      font-weight:800;
      background-color:#714c93;
      border:5px solid #714c93;
      color:#f7d400;
      &:hover{
        color:#714c93;
        background-color:#f7d400;
        border:5px solid #f7d400;
        
        text-shadow: 2.5px;
        transition:all 0.5s ease ;
      }
`
const MaterialUI=styled.div`
    cursor:pointer;
`
const Descriptioncontainer= styled.div`
      display:flex;
      flex-derection:column;
      flex-wrap:wrap;

`
const DescriptionHeading=styled.h3`
        color:#efb903;
`
const Description= styled.div`
        flex:1`

const ProductDescriptionList= styled.ul`
       list-style-type: none;
`
const Ul= styled.ul`
      list-style-type: disc;

`
const ListItem =styled.li`
      margin:5px;
      font-size:1.25rem;
      ${mobile({ fontSize:"0.75rem"})}
`
const ListItemSpan =styled.span`
      font-size:1.75rem;
      ${mobile({ fontSize:"1.25rem"})}
`
const UlListItem =styled.li`
      margin:5px;
      color:#714c93;
      font-size:1.25rem;
      ${mobile({ fontSize:"1.25rem"})}
`
const UlListItemSpan =styled.span`
      font-size:1.75rem;
      margin:5px;
      color:white;
      ${mobile({ fontSize:"1.25rem"})}
`


const ProductDescriptionListH5= styled.h5`
       color:#63B1C5;
       display:inline;
       font-weight:900;
       font-size:2rem;
       ${mobile({ fontSize:"1rem"})}
`


const RelatedProductsWrapper= styled.div``



const ProductSingle = () => {
    const location=useLocation();
    const id=location.pathname.split("/")[2];
    const [product,setProduct]=useState({});
    const [quantity, setQuantity] = useState(1);
    const [COLOR,setColor]=useState("")
    const [size,setSize]=useState("")
    // const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct=async()=>{
          Products.forEach((elemnt)=>
          {
            if(elemnt.Id==id){
              setProduct(elemnt)
            }
          }
          );      
        }
        getProduct()
    },[id])

    const handleQuantity = (type) => {
    //   if (type === "dec") {
    //     quantity > 1 && setQuantity(quantity - 1);
    //   } else {
    //     quantity < 3 && setQuantity(quantity + 1);
    //   }
    };
    
    const handleAddTOCart = () => {
    //   dispatch(
    //     addProduct({...product,quantity,COLOR,size})
    //   )
    };

  return (
    <Container>
        <Navbar/>
            <Wrapper>
              <ImgContainer>
                {/* <Image src={product.img}/> */}
                {/* {product.Image.forEach((Image) => ( */}
                <Image src={product.Image}/>
                {/* ))} */}
                {/* <Image src={product.Images}/> */}
              </ImgContainer>
              <InfoContainer>
                <Title>{product.Title}</Title>
                {/* <Title>Sexy Jutsu</Title> */}
                <Price> ₹{product.Price}<Strike><strike> ₹{Math.round(product.Price+(product.Price/100)*10)}</strike></Strike></Price>
                {/* <Price> ₹{500} <Strike><strike> ₹{Math.round(500+(500/100)*15)}</strike></Strike></Price> */}
                <FilterContainer>
                    <Filter>
                      <FilterTitle>Color</FilterTitle>
                      {product.Colors?.map((color) => (
                        <FilterColor title={color} name={color} color={color} key={color} onClick={()=>{ console.log(COLOR);setColor(color); }}/>    
                      ))}
                    </Filter>

                    <Filter>
                      <FilterTitle>Size</FilterTitle>

                      <FilterSize onChange={(e) => setSize(e.target.value)}>
                          
                      <FilterSizeOption key="M">M</FilterSizeOption>   
                      <FilterSizeOption key="L">L</FilterSizeOption>   
                      <FilterSizeOption key="XL">XL</FilterSizeOption>   
                      <FilterSizeOption key="XXL">XL</FilterSizeOption>   
                      
                        
                      </FilterSize>
                      {/* <FilterTitle>Size</FilterTitle>
                      <FilterSize onChange={(e) => setSize(e.target.value)}>
                          {product.size?.map((size) => (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>   
                      ))}
                        
                      </FilterSize> */}
                    </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                        <MaterialUI><RemoveIcon onClick={() => {handleQuantity("dec")}} /></MaterialUI>
                        <Amount>{quantity}</Amount>
                        <MaterialUI><AddIcon onClick={() => {handleQuantity("inc")}} /></MaterialUI>
                  </AmountContainer>
                  <Button onClick={handleAddTOCart}>ADD TO CART</Button>
                </AddContainer>
                {/* <Product/> */}
              </InfoContainer>

            </Wrapper>
            <Wrapper2>
            <Descriptioncontainer>
              <Description>
                    <DescriptionHeading>Product details:</DescriptionHeading>
                    <ProductDescriptionList>
                        <ListItem><ProductDescriptionListH5>Composition:</ProductDescriptionListH5> <ListItemSpan>98% cotton</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>GSM:</ProductDescriptionListH5> <ListItemSpan>100</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Weight:</ProductDescriptionListH5> <ListItemSpan>100g</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>sizes:</ProductDescriptionListH5> <ListItemSpan> S, M, L, XL, XXL</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Estimated order processing time:</ProductDescriptionListH5> <ListItemSpan>48hrs</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Sleeve Lenght: </ProductDescriptionListH5><ListItemSpan>Half sleeve</ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Neckline: </ProductDescriptionListH5><ListItemSpan>round</ListItemSpan></ListItem>
                        <ListItem><h2>Made with ❤️ in <span style={{color:"orange"}}>IN</span>D<span style={{color:"green"}}>IA</span></h2></ListItem>
                    </ProductDescriptionList>
              </Description>

              <Description>
                    <DescriptionHeading>Related Infromation:</DescriptionHeading>
                    <ProductDescriptionList>
                        <ListItem><ProductDescriptionListH5>shipping:</ProductDescriptionListH5> <ListItemSpan>
                                                    <Ul>
                                                      <UlListItem><UlListItemSpan>Pay Whne order is placed, No COD</UlListItemSpan></UlListItem>
                                                    </Ul>
                                                    </ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Return & exchange:</ProductDescriptionListH5> <ListItemSpan>
                                                    <Ul>
                                                      <UlListItem><UlListItemSpan>For any returns and exchange please read our FAQs Page.
                                                      </UlListItemSpan></UlListItem>
                                                    </Ul>
                                                    </ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Wash care:</ProductDescriptionListH5> <ListItemSpan>
                                                    <Ul>
                                                      <UlListItem><UlListItemSpan>Machine wash cold with similar colours.</UlListItemSpan></UlListItem>
                                                      <UlListItem><UlListItemSpan>Only non-chlorine.Tumble dry low.</UlListItemSpan></UlListItem>
                                                      <UlListItem><UlListItemSpan>Warm Iron if needed.</UlListItemSpan></UlListItem>
                                                    </Ul>
                                                    </ListItemSpan></ListItem>
                        <ListItem><ProductDescriptionListH5>Note:</ProductDescriptionListH5> <ListItemSpan>
                                                    <Ul>
                                                      <UlListItem><UlListItemSpan>Colours may slightly vary depending on your screen brightness.</UlListItemSpan></UlListItem>
                                                      <UlListItem><UlListItemSpan>Actual product specifications may vary +/-5%.</UlListItemSpan></UlListItem>
                                                      <UlListItem><UlListItemSpan>All the products have different sizes and size chart.</UlListItemSpan></UlListItem>
                                                    </Ul>
                                                </ListItemSpan></ListItem>
                    </ProductDescriptionList>
              </Description>
              </Descriptioncontainer>
            </Wrapper2>
            <RelatedProductsWrapper>

            </RelatedProductsWrapper>
        <Footer/>
    </Container>
  )
}

export default ProductSingle