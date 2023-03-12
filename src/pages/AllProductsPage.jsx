import {React, useState} from 'react'
import styled from 'styled-components'
import  Footer  from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsListed from '../components/ProductsListed'
import {mobile} from '../responsive';
// import { useLocation } from "react-router";

const Container=styled.div``
const Title=styled.h1`
    margin:20px;
    `
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    `
const Filter=styled.div`
   margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`
const FilterText=styled.span`
      font-size:20px;
      font-weight:600px;
      margin-right:20px;
      ${mobile({ marginRight: "0", fontSize:"18px" })}

`

const Select=styled.select`
    padding:10px;
    margin-left:20px;
    ${mobile({ margin: "10px 0" ,})}

`
const Option=styled.option``

const AllProductsPage = () => {
    // const location=useLocation();
    // const category=location.pathname.split("/")[2]
    const [filters, setFilters] = useState({});
    const[sort,setSort]=useState({});

    const handleChange=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    };
    console.log(filters)
  return (
    <Container>
        <Navbar/>
        <Title></Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                    <Select name="color" onChange={handleChange} >
                        <Option disabled>Select Color</Option>
                        <Option>black</Option>
                        <Option>white</Option>
                        <Option>blue</Option>
                        <Option>lavender</Option>
                        <Option>camel</Option>
                        <Option>peach</Option>
                    </Select>
                    
                    <Select name="size" onChange={handleChange} >
                        <Option disabled>Select Size</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                    
                </FilterText>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                    <Select  onChange={(e) => setSort(e.target.value)}>
                        <Option disabled>Sort</Option>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (Asc)</Option>
                        <Option value="dec">Price (Desc)</Option>
                    </Select>
                </FilterText>
            </Filter>
        </FilterContainer>
        <ProductsListed />
        <ProductsListed />
        <ProductsListed />
        <ProductsListed />
        <Footer/>
    </Container>
  )
}

export default AllProductsPage