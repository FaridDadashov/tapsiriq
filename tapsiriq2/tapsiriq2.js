const user={
    name:'elnur',
    height:1.79,
    phone:{
        model:'iphone',
    },
    orders:['book','mouse','mousepad']
}
// a
user.height++
console.log(user.height);
// b
user.phone.model = 'samsung';
console.log(user.phone.model);
// c
user.phone.marka = 's22';
console.log(user.phone);
// d
delete user.name
console.log(user);
// e
delete user.orders[0]
console.log(user.orders);
// f 
delete user.orders[2]
console.log(user.orders);
// g)
user.orders.unshift('ball')
console.log(user.orders);
// h
user.orders.push('headphones')
console.log(user.orders);
