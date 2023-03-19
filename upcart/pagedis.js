var product_desc = JSON.parse(localStorage.getItem("mensdata"));
displayproduct()
function displayproduct(){
    product_desc.map(function(el){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        
        var img = document.createElement("img");
        img.setAttribute("src",el.image_url);
        img.setAttribute("alt",el.name);
        img.setAttribute("class","product_image");
        
        var img1 = document.createElement("img");
        img1.setAttribute("src",el.img1);
        img1.setAttribute("alt",el.name);
        // img1.setAttribute("class","product_image");
         
        var img2 = document.createElement("img");
        img2.setAttribute("src",el.img2);
        img2.setAttribute("alt",el.name);
        // img2.setAttribute("class","product_image");

        var img3 = document.createElement("img");
        img3.setAttribute("src",el.img3);
        img3.setAttribute("alt",el.name);
        // img3.setAttribute("class","product_image");

        var img4 = document.createElement("img");
        img4.setAttribute("src",el.img4);
        img4.setAttribute("alt",el.name);
        // img4.setAttribute("class","product_image");

        var img5 = document.createElement("img");
        img5.setAttribute("src",el.img5);
        img5.setAttribute("alt",el.name);
        // img5.setAttribute("class","product_image");

        var img6 = document.createElement("img");
        img6.setAttribute("src",el.img6);
        img6.setAttribute("alt",el.name);
        // img6.setAttribute("class","product_image");

       


        var desc = document.createElement("p");
        desc.textContent = el.desc;
       
        var name = document.createElement("h3");
        name.textContent = el.name;
        name.setAttribute("id","mh3");
        var price = document.createElement("p");
        price.textContent = "$ "+el.price;
        price.setAttribute("id","mpri");
        var uptex = document.createElement("p");
        uptex.textContent="First Ascent";
        var uptey = document.createElement("p");
        uptey.textContent="UPF 50+";
        uptey.setAttribute("id","firstacc");
        var uptez = document.createElement("p");
        uptez.textContent="StormRepel DWR";
        uptez.setAttribute("id","firstacc");
        var uptea = document.createElement("p");
        uptea.textContent="Secure Pocket";
        uptea.setAttribute("id","firstacc");
        var upteb = document.createElement("p");
        upteb.textContent="Lightweight";
        upteb.setAttribute("id","firstacc");
        var uptec = document.createElement("p");
        uptec.textContent="Packable";
        uptec.setAttribute("id","firstacc");
        var btn = document.createElement("button");
        btn.textContent = "Add To Cart";
        btn.setAttribute("id","cartbtn");
        btn.addEventListener("click",function(){
            addToCart(el);
        })
        var star1=document.createElement("img");
        star1.setAttribute("id", "star");
        star1.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");
        
        var star2=document.createElement("img");
        star2.setAttribute("id", "star");
        star2.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        var star3=document.createElement("img");
        star3.setAttribute("id", "star");
        star3.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        var star4=document.createElement("img");
        star4.setAttribute("id", "star");
        star4.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        var star5=document.createElement("img");
        star5.setAttribute("id", "star");
        star5.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        var select_size = document.createElement("select");
        select_size.setAttribute("id","size_select");
        let option1 = document.createElement("option");
        option1.text = "Select Size";
        option1.value = "";
        select_size.appendChild(option1);
        for(var i=0;i<el.size.length;i++){
            var option=document.createElement("option");
            option.setAttribute("value",el.size[i]);
            option.textContent=el.size[i];
            select_size.appendChild(option);
        }
        select_size.addEventListener("change",function(){
            changefun(el)
        });
        div1.append(img);

        div2.append(star1,star2,star3,star4,star5);

        document.getElementById("size1").append(uptex,name,price,div2,select_size,btn);

     document.getElementById("size").append(div1);
    //  document.getElementById("mtext").append(desc);

     document.getElementById("img1").append(img1,uptex);
     document.getElementById("img2").append(img2,uptey);
     document.getElementById("img3").append(img3,uptez);
     document.getElementById("img4").append(img4,uptea);
     document.getElementById("img5").append(img5,upteb);
     document.getElementById("img6").append(img6,uptec);
    })
    
}

function changefun(product){
    var selected = document.getElementById("size_select").value;
    product["selected"] = selected;
    console.log(selected);
}


var cart_data = JSON.parse(localStorage.getItem("cartProduct"))||[];
function addToCart(product){
    cart_data.push(product);
    localStorage.setItem("cartProduct",JSON.stringify(cart_data));
}

// var cartarr=JSON.parse(localStorage.getItem("cartProduct"))||[];
// function addedTocart(elem){
//    cartarr.push(elem);
//        console.log(cartarr);
//        localStorage.setItem("cartProduct", JSON.stringify(cartarr));
//    }