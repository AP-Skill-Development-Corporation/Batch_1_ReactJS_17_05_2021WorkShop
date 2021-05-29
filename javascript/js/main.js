function a1(){
    document.writeln("Hello")
}
function b1(){
    a1()
    document.writeln("Hai")
    b1()
    a1()
}
b1()