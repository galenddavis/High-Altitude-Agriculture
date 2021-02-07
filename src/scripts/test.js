

export const greeting = () => {
    const test = document.createElement('h1')
    const hello = document.createElement('h2')
    test.className = 'greeting'
    test.innerText = 'Click Me'
    hello.innerText = 'Hello'
    hello.className = 'hello'
    document.body.append(test)
    document.body.append(hello)

    test.addEventListener('click', () => {
        const times = 30
        for (let i = 0; i < times; i++){
            window.open('https://i.ytimg.com/vi/gPX3xUsyOAc/hqdefault.jpg')
        }

    })
    
    // function openWindow() {
    //     window.open()
    // }
    
    // test.addEventListener('click', () => {
    //     if (hello.className === 'hello') {
    //         hello.innerText = 'Goodbye'
    //         setInterval(function() {hello.className = 'goodbye'}, 1000)
    //     }
    // })
    
}