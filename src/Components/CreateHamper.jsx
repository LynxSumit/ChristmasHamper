
import Navbar from './Navbar'
import CARD from './Card'
import { Box } from '@mui/joy'
import Footer from './Footer'
import { useSelector } from 'react-redux'
const CreateHamper = () => {
const {products} = useSelector(state => state.products)

   const gridLayout = {
    display: "grid",
    gridTemplateColumns: { md: `repeat(4, 1fr)`, xs: "1fr" },
    gridTemplateRows: { md: `repeat(4, 1fr)`, xs: "1fr" },
    gap: "2vmax",
    margin: "3vmax",
    height : 'auto',
  };
  return (
    <>
<Navbar/>
<Box sx={gridLayout}>
        {}
        {products.map((item, i) => (
          <CARD
            key={i}
            img={item.img}
            title={item.title}
            desc={item.description}
            price={item.price}
          item={item}
          />
        ))}
   
      </Box>
      <Footer/>
   
  
    </>
  )
}

export default CreateHamper
