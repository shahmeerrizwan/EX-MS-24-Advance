// // let mobiles = [
// //     {
// //         iphone: [{
// //             name: "iphone11",
// //             ram: "3 Gb",
// //             storage: "126 gb"
// //         },
// //         {
// //             name: "iphone12",
// //             ram: "4 Gb",
// //             storage: "256 gb"
// //         },
// //         {
// //             name: "iphone13",
// //             ram: "6 Gb",
// //             storage: "526 gb"
// //         },
// //         {
// //             name: "iphone15",
// //             ram: "8 Gb",
// //             storage: "1 TB"
// //         }]
// //     },
// //     {
// //         samsung: [{
// //             name: "samsung11",
// //             ram: "3 Gb",
// //             storage: "126 gb"
// //         },
// //         {
// //             name: "samsung12",
// //             ram: "4 Gb",
// //             storage: "256 gb"
// //         }, {
// //             name: "samsung13",
// //             ram: "6 Gb",
// //             storage: "526 gb"
// //         }, {
// //             name: "samsung14",
// //             ram: "8 Gb",
// //             storage: "1 TB"
// //         }]
// //     },
// //     {
// //         nokia: [{
// //             name: "nokia11",
// //             ram: "3 Gb",
// //             storage: "126 gb"
// //         },
// //         {
// //             name: "nokia12",
// //             ram: "4 Gb",
// //             storage: "256 gb"
// //         },
// //         {
// //             name: "nokia13",
// //             ram: "6 Gb",
// //             storage: "526 gb"
// //         },
// //         {
// //             name: "nokia15",
// //             ram: "8 Gb",
// //             storage: "1 TB"
// //         }]
// //     }
// // ]

// // let brand = document.getElementById("select1");
// // let model = document.getElementById("select2");
// // let allBrands = Object.keys(mobiles)

// // function init() {
// //     mobiles?.map((d, i) => {
// //         brand.innerHTML += `<option value=${i}>${Object.keys(d)}</option>`
// //     }
// //     )
// // }

// // function selectedBrand() {
// //     model.innerHTML = ""
// //     let selectedBrand = brand.value;
// //     let key = Object.keys(mobiles[selectedBrand])
// //     mobiles[selectedBrand][key]?.map((dd, ii) => {
// //         model.innerHTML += `<option onclick="${modelSelect()}" value=${ii}>${dd.name}</option>`
// //     })
// // }

// // function modelSelect() {
// //     let selectedBrand1 = brand.value;
// //     let key1 = Object.keys(mobiles[selectedBrand1])
// //     let selectModel = model.value
// //     let val = mobiles[selectedBrand1][key1][selectModel]
// //     console.log(val);
// // }

// // init();















// let mobiles = obj = {
//     iphone: {
//         iphone7: {
//             Screen: "4.2 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         iphone8: {
//             Screen: "4.3 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         iphone9: {
//             Screen: "4.4 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         iphone10: {
//             Screen: "4.5 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         iphone11: {
//             Screen: "4.8 inches",
//             Ram: "6gb",
//             Rom: "128gb"
//         },
//         iphone12: {
//             ram: "8gb",
//             rom: "256gb"
//         },
//         iphone13: {
//             ram: "8gb",
//             rom: "256gb"
//         }
//     },
//     Redmi: {
//         Redmi13: {
//             Screen: "4.5 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         RedmiA: {
//             Screen: "4.9 inches",
//             Ram: "6gb",
//             Rom: "128gb"
//         },
//         RedmiNote13: {
//             Screen: "5.1 inches",
//             Ram: "8gb",
//             Rom: "256gb"
//         },
//         RedmiNote13Pro: {
//             Screen: "5.3 inches",
//             Ram: "8+8gb",
//             Rom: "512gb"
//         },
//     },
//     Xiomi: {
//         Xiomi11T: {
//             Screen: "4.8 inches",
//             Ram: "4gb",
//             Rom: "64gb"
//         },
//         Xiomim1: {
//             Screen: "4.9 inches",
//             Ram: "6gb",
//             Rom: "128gb"
//         },
//         Xiomim2: {
//             Screen: "5.1 inches",
//             Ram: "8gb",
//             Rom: "256gb"
//         },
//         Xiomi13: {
//             Screen: "5.4 inches",
//             Ram: "8+8gb",
//             Rom: "512gb"
//         },
//     },
//     Realmi: {
//         Realmec51: {
//             Screen: "4.8 inches",
//             Ram: "4+4gb",
//             Rom: "128gb"
//         },
//         Realmec52: {
//             Screen: "5.0 inches",
//             Ram: "6gb",
//             Rom: "128gb"
//         },
//         Realmec53: {
//             Screen: "5.1 inches",
//             Ram: "6gb",
//             Rom: "128gb"
//         },
//         Realme13C: {
//             Screen: "5.8 inches",
//             Ram: "8+8+5gb",
//             Rom: "512gb"
//         },
//     }
// }

// let brand = document.querySelector("#brands")
// let model = document.querySelector("#models")

// let allBrand = Object.keys(mobiles)

// function init() {
//     for (let i = 0; i < allBrand.length; i++) {
//         brand.innerHTML += `<option>${allBrand[i]}</option>`
//     }
// }
// init()

// function selectBrand() {
//     let selectedBrand = brand.value
//     let models = Object.keys(mobiles[selectedBrand])

//     model.innerHTML = ""
//     for (let i = 0; i < models.length; i++) {
//         model.innerHTML += `<option>${models[i]}</option>`
//     }
// }

// function modelSelect() {
//     let selectedBrand = brand.value
//     let selectedModel = model.value
//     let val = mobiles[selectedBrand][selectedModel]
//     console.log(val)
// }
// init()


