import React from "react";
import { Items } from "./Items";


function App() {
  const itemsCart = [
    {
      "id": 1, "price": 1000, "name": "sneakers", "url": 'https://www.instyle.com/thmb/P3o-yTJSKMcUasE8xHVRuX0Eje4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-primary-whitesneakers-jthompson-0981.jpg-6b683aa5e6e540a3b14409eac07d8a2b.jpg', "value": 5
    },
    {
      "id": 2, "price": 2000, "name": "hoodies", "url": 'https://media.glamourmagazine.co.uk/photos/61ba1d9d0f681882da425492/4:3/w_1920,h_1440,c_limit/HOODIES_15122021_SQ.jpg', "value": 7
    },
    {
      "id": 3, "price": 3000, "name": "t-shirts", "url": 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/620626.jpg', "value": 2
    },
    {
      "id": 4, "price": 4000, "name": "longsleeves", "url": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvEOzqZ8qFfQ2uz-OjX0uzRVHrAVS5SrAj3anCY_oF6xz5B_Pv7q5a-pVKnW1oa2pZ2w&usqp=CAU', "value": 25
    },
    {
      "id": 5, "price": 5000, "name": "jeans", "url": 'https://manzuko.com/blog/wp-content/uploads/2020/07/AdobeStock_299703273.jpg', "value": 77
    }
  ]
  return (
    <div className="App">
      <Items
        shopname={'I-Shop'}
        itemsCart={itemsCart}
      />
    </div>
  );
}

export default App;
