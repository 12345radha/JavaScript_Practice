/*Add the JavaScript here for the function billingFunction(). 
 It is responsible for setting and clearing the fields in Billing Information */
 function billingFunction(){
    if(document.getElementById('same').checked){
         var nameTake = document.getElementById('shippingName').value;
         var codeTake = document.getElementById('shippingZip').value;
         document.getElementById('billingName').value = nameTake;
         document.getElementById('billingZip').value = codeTake;       
    }else{
         document.getElementById('billingName').value = "";
         document.getElementById('billingZip').value = "";
    }
  }
