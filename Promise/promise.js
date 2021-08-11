Promise.resolve().then(() => {
    console.log(0)
    new MutationObserver(()=>console.log(4))
}).then(() => {
    console.log(4.1)
})

Promise.resolve()
    .then(() => {console.log(1)})
    .then(() => {console.log(2)})
    .then(() => {console.log(3)})
    .then(() => {console.log(5)})
.then(() => {console.log(6)})