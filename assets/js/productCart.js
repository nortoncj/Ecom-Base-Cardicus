let shop = document.getElementById('shop');

let shopItemsData = [{
    id:'CRD343243',
    name:"Khopesh Card",
    price: 9.99,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img:"https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    model: "https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

},{
    id:'CRD884565',
    name:"Gladius Card",
    price: 4.99,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img:"https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    model: "https://images.pexels.com/photos/4466448/pexels-photo-4466448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
    id:'CRD993243',
name:"Khopesh Custom Card",
price: 29.99,
desc: "lorem ipsum dolor sit amet, consectetur adip",
img:"https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
model: "https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},{
    id:'CRD6545243',
    name:"Gladius Custom Card",
    price: 19.99,
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    img:"https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    model: "https://images.pexels.com/photos/4466448/pexels-photo-4466448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},]

let basket = [{
    
}]

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,img,model} = x
        return ( `
        <a class="collections-products-link" href="/product.html" id=product-id-${id}><div class="collections-products__item">
        <div class="collections-products__item-box">
            <div class="collections-products__item-heart">
                <div class="collections-products__item-icon">
                    <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
                </div>
        </div>
        <div class="collections-products__slider">
            <div class="collections-products__slide collections-products__slide-img">
            <img src=${img} alt="placeholder" class="img-responsive" />
        </div>
        <div class="collections-products__slide collections-products__slide-model">
            <img src=${model} alt="model" class="img-responsive" />
        </div>
        <div class="collections-products__slide collections-products__slide-img">
            <img src="https://images.pexels.com/photos/4040600/pexels-photo-4040600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="model" class="img-responsive" />
        </div>
        
        <div class="collections-products__slide collections-products__slide-img">
            <img src="https://images.pexels.com/photos/4466448/pexels-photo-4466448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="model" class="img-responsive" />
        </div>
        </div>
        
        
        <div class="collections-products__left">
            <div class="collections-products__left-icon">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
        </div>
        <div class="collections-products__right">
            <div class="collections-products__right-icon">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div> 
        </div>
         
        </div>
      <div class="collections-products__item-title">${name} </div>
    <div class="collections-products__item-price">$${price}</div>
        
    </div></a>
        `)
    }).join("") );
}

generateShop();




let increment = (id) => { 
    let selectedItem = id;
    let search =basket.find((x)=> x.id === selectedItem.id)
    
    if(search === undefined){
        basket.push({
        id: selectedItem.id,
        item: 1,
    });
    }
    else{
        search.item ++;
    }
    update(selectedItem.id);
}

let decrement = (id) => { 
    let selectedItem = id;
    let search =basket.find((x)=> x.id === selectedItem.id)
    
    if(search === 0){
        return
    }
    else{
        search.item --;
    }
    update(selectedItem.id);
}
let update = (id) => { 
    let search = basket.find( (x)=>x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
     
}

let calculation = () => {
    let cardIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);

    
}


  
  