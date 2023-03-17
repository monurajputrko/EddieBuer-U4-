let addedTocart=JSON.parse(localStorage.getItem("cartProduct"))||[]
document.getElementById("items").textContent="Total Items :"+addedTocart.length
var xm=addedTocart.length;
localStorage.setItem("cartProduct", JSON.stringify(cartarr));
var sum= addedTocart.reduce((acc,el)=>parseInt(acc)+parseInt(el.price),0);
document.getElementById("price").textContent="Total Price :"+sum   
         displayCartItems (addedTocart)
           console.log("hi")
         function displayCartItems (addedTocart){
           document.getElementById("body").textContent=""
           addedTocart.map(function(el,i){
            // var div1=document.createElement("div");
            // var div=document.createElement("div");
            var image=document.createElement("img");
            image.setAttribute("src",el.image_url);
            image.setAttribute("alt",el.name);

              let tr=document.createElement("tr")

              let td1=document.createElement("td")
              td1.textContent=el.name

              let td2=document.createElement("td")
              td2.textContent=el.price

              // let td3=document.createElement("td")
              // td3.textContent=el.strikedoffprice

              let td3=document.createElement("td")
              td3.textContent="Delete"
              td3.addEventListener("click",function(){
               deleteProduct(el,i)
              })
              let td5=document.createElement("td")

              var image=document.createElement("img");
                image.setAttribute("src",el.image_url);
                image.setAttribute("alt",el.name);
              tr.append(image,td1,td2,td3)
                // div.append(tr)
              document.getElementById("body").append(tr)
           })
         }
       
         function deleteProduct(product,i){
           addedTocart.splice(i,1)
           localStorage.setItem("cartProduct",JSON.stringify(addedTocart))
           document.getElementById("items").textContent="Total Items :"+addedTocart.length
var sum= addedTocart.reduce((acc,el)=>parseInt(acc)+parseInt(el.price),0);
document.getElementById("price").textContent="Total Price :"+sum   
           displayCartItems (addedTocart)
         }

         document.querySelector("#form").addEventListener("submit", applyPromo)
         function applyPromo(){
           event.preventDefault()
           let val=document.getElementById("promo").value
           console.log(val)
           if(val==='masai30'){
               console.log("inside")
               var sum= addedTocart.reduce((acc,el)=>parseInt(acc)+parseInt(el.price),0);
               document.getElementById("price").textContent="Total Price :"+(sum-sum*0.3) 
               alert("30% Promotion Applied Successfully")
           }else if(val==='masai50'){
             var sum= addedTocart.reduce((acc,el)=>parseInt(acc)+parseInt(el.price),0);
             document.getElementById("price").textContent=""+(sum-sum*0.5)
             alert("50% Promotion Applied Successfully") 
           }else if(val==='Free'){
              var sum= addedTocart.reduce((acc,el)=>parseInt(acc)+parseInt(el.price),0);
              document.getElementById("price").textContent=""+(sum-sum) 
              alert("Everything Free Hurray!")
              }else{
                   alert("Please enter a valid promocode")
                }
         }
          