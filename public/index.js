'use strict';

//list of truckers
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL steps
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful from step 4
const deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 650,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}];

//Exercice1
/*for (const item of deliveries)
{
    let priceKm = 0;
    let priceVl =0;
    for (const item2 of truckers){
      if (item.truckerId == item2.id)
      {
        priceKm = item2.pricePerKm;
        priceVl = item2.pricePerVolume;
        break;
      }
    }
    const shipping_price = (item.distance *priceKm) + (item.volume*priceVl);
    shipping_price;
    console.log(shipping_price);
}*/


//Exercice2
/*for (const item of deliveries)
{
    let priceKm = 0;
    let priceVl =0;
    for (const item2 of truckers){
      if (item.truckerId == item2.id)
      {
        priceKm = item2.pricePerKm;
        priceVl = item2.pricePerVolume;
        break;
      }
    }
    if (item.volume >= 5)
    {
      priceVl = priceVl * 0.9;
    }
    else if (item.volume >= 10) {
      priceVl = priceVl * 0.7;
    }
    else if (item.volume >= 25) {
       priceVl = priceVl * 0.5;
    }


    const shipping_price = (item.distance *priceKm) + (item.volume*priceVl);
    shipping_price;
    console.log(shipping_price);
}*/

//Exercice3
/*for (const item of deliveries)
{
    let priceKm = 0;
    let priceVl =0;
    for (const item2 of truckers){
      if (item.truckerId == item2.id)
      {
        priceKm = item2.pricePerKm;
        priceVl = item2.pricePerVolume;
        break;
      }
    }
    if (item.volume >= 5)
    {
      priceVl = priceVl * 0.9;
    }
    else if (item.volume >= 10) {
      priceVl = priceVl * 0.7;
    }
    else if (item.volume >= 25) {
       priceVl = priceVl * 0.5;
    }


    const shipping_price = (item.distance *priceKm) + (item.volume*priceVl);
    shipping_price;
    console.log("Shipping Price : " + shipping_price);
    let priceTax = shipping_price*0.3;
    let inssurance = priceTax*0.5;
    console.log("Insurance : "+ inssurance);
    let treasury = Math.round(item.distance/500);
    console.log("Treasury : " + treasury);
    let rest = priceTax - inssurance - treasury;
    console.log("Rest : " + rest);


}*/

/*//Exercice 4
for (const item of deliveries)
{
    let priceKm = 0;
    let priceVl =0;
    for (const item2 of truckers){
      if (item.truckerId == item2.id)
      {
        priceKm = item2.pricePerKm;
        priceVl = item2.pricePerVolume;
        break;
      }
    }
    if (item.volume >= 5)
    {
      priceVl = priceVl * 0.9;
    }
    else if (item.volume >= 10) {
      priceVl = priceVl * 0.7;
    }
    else if (item.volume >= 25) {
       priceVl = priceVl * 0.5;
    }



    const shipping_price = (item.distance *priceKm) + (item.volume*priceVl);
    console.log("Shipping Price : " + shipping_price);
    let priceTax = shipping_price*0.3;
    let inssurance = priceTax*0.5;
    console.log("Insurance : "+ inssurance);
    let treasury = Math.round(item.distance/500);
    console.log("Treasury : " + treasury);
    let rest = priceTax - inssurance - treasury;
    console.log("Rest : " + rest);
    let convargo = 0;
    if (item.options.deductibleReduction == true)
    {
       let deductible_charge = item.volume;
       console.log("Deductible Charge : " + deductible_charge);
       convargo =  deductible_charge + 200 + rest;
    }
    else
    {
      convargo = convargo + rest + 1000;
    }
    console.log("Total Convargo : " + convargo);
}*/

//list of actors for payment
//useful from step 5
let actors = [{
  'deliveryId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];

for (const item of deliveries)
{
    let priceKm = 0;
    let priceVl =0;
    for (const item2 of truckers){
      if (item.truckerId == item2.id)
      {
        priceKm = item2.pricePerKm;
        priceVl = item2.pricePerVolume;
        break;
      }
    }
    if (item.volume >= 5)
    {
      priceVl = priceVl * 0.9;
    }
    else if (item.volume >= 10) {
      priceVl = priceVl * 0.7;
    }
    else if (item.volume >= 25) {
       priceVl = priceVl * 0.5;
    }



    let shipping_price = (item.distance *priceKm) + (item.volume*priceVl);
    console.log("Shipping Price : " + shipping_price);
    let priceTax = shipping_price*0.3;
    let inssurance = priceTax*0.5;
    console.log("Insurance : "+ inssurance);
    let treasury = Math.round(item.distance/500);
    console.log("Treasury : " + treasury);
    let rest = priceTax - inssurance - treasury;
    console.log("Rest : " + rest);
    let convargo = 0;
    let deductible_charge;
    if (item.options.deductibleReduction == true)
    {
       deductible_charge = item.volume + 200;
       console.log("Deductible Charge : " + deductible_charge);
       convargo =  deductible_charge + rest;
    }
    else
    {
      convargo = convargo + rest + 1000;
      deductible_charge = 1000;
    }
    console.log("Total Convargo : " + convargo);

    var payment = [
      {
          "who": "shipper",
          "type": "debit",
          "amount": shipping_price + deductible_charge
        },
        {
          "who": "trucker",
          "type": "credit",
          "amount": shipping_price*0.7
        },
        {
          "who": "insurance",
          "type": "credit",
          "amount": inssurance
        },
        {
          "who": "treasury",
          "type": "credit",
          "amount": treasury
        },
        {
          "who": "convargo",
          "type": "credit",
          "amount": convargo
        }

    ]
    console.log(payment);
}


console.log(truckers);
console.log(deliveries);
console.log(actors);
