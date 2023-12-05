import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  products : [
    {
      img: "https://source.unsplash.com/800x600/?sports/table-tennis",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/rugby",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/hockey",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/football",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/cricket",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nec urna vestibulum.",
      price: "$49.99",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },

    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      price: "$34.95",
    },
    {
      img: "https://source.unsplash.com/800x600/?sports/badminton",
      title: "Lorem Ipsum Product 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      price: "$79.99",
    },
  ]
  
  
};

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    // setProducts: (state, action) => {
    //   state.data = action.payload.value;
    // },
  
  },
});

// this is for dispatch
// export const { setProducts } =
//   ProductsSlice.actions;

// this is for configureStore
export default ProductsSlice.reducer;
