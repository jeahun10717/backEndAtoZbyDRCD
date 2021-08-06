function hello() {
    // console.log(this);
    console.log(this===global);
}

class A {
    constructor(num){
        this.num = num;
    }
    memberFunction(){
        console.log('----------- class -----------')
        console.log(this)
        console.log(this === global)
    }
}



const a = new A(1);

hello();
a.memberFunction()
console.log(this === module.exports);