// Write a map() function to add 2 in every element in an array.
// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((x) => {
//    return x= x+2
// } )

// console.log(result);


// const products = [
//     { name: 'Laptop', price: 1000, quantity: 5 },
//     { name: 'Phone', price: 500, quantity: 0 },
//     { name: 'Tablet', price: 300, quantity: 2 },
//     { name: 'Monitor', price: 200, quantity: 10 }
//   ];



// const cost = products.map( ({price,quantity}) =>
// {
//     return price*quantity;
// }
// )

// let totalcost =0

// for( i =0; i<cost.length ; i++)
// {
//     totalcost += cost[i];
// }

// console.log(`total cost is $: ${totalcost}`)


const transactions = [
    { type: 'income', amount: 1000 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 500 },
    { type: 'expense', amount: 300 }
  ];


const groupData = transactions.reduce( (acc, {type,amount}) =>{

    if (type === "income")
        acc.totalIncome += amount
    else
    {
        acc.totalAmount += amount
    }

    return acc
},{ totalIncome:0,totalAmount:0})

console.log(groupData);