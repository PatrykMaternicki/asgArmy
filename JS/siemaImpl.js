
const siemaAPI = new Siema({
  duration: 250,
  loop:true,
  perPage: {
  1024: 1
},
});

setInterval(() =>{ siemaAPI.next();}, 5000)
