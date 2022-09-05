title = `
\t\t\t\t\t__   ______
\t\t\t\t\t\\ \\ / /  _ \\ ___ _   _ ___
\t\t\t\t\t \\ V /| | | / __| | | / __|
\t\t\t\t\t  | | | |_| \\__ \\ |_| \\__ \\ 
\t\t\t\t\t  |_| |____/|___/\\__, |___/
\t\t\t\t\t                 |___/
`
console.log(title)
console.log("%c\t\t\t\tThis web-app uses yungestDevSystems", "color: orange")

window.localStorage.setItem("GCSE", navigator.userAgent);

console.log("Running on:\n"+ window.localStorage.getItem("GCSE"));

(function () {
    (function a() {
        try {
            (function b(i) {
                if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                    (function () { }).constructor('debugger')()
                } else {
                    debugger
                }
                b(++i)
            }
            )(0)
        } catch (e) {
            setTimeout(a, 5000)
        }
    }
    )()
}
)();

