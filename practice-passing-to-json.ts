var fs: any = require('fs')
const customer = {
    name: "Newbie Corp.",
    order_count: 0,
    address: "Po Box City"
  };


  const jsonString = JSON.stringify(customer)
  fs.writeFile('./practice-passing-to-json.json', jsonString, (err: any) => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})