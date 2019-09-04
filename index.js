// Add your Circle class here

class Circle{
    constructor(radius){
        this.rad = 6;
    }

    get radius(){
        return this.rad
    }

    set radius(val){
        this.rad = val
    }

    get diameter(){
        return this.radius*2
    }

    set diameter(newDiam){
        this.rad = newDiam/2.0
    }

    get circumference(){
        return this.radius*2*3.14
    }

    set circumference(val){
        this.rad = val/3.14/2
    }

    get area(){
        return this.radius * this.radius * 3.14
    }

    set area(val){
        this.radius = Math.sqrt(val)/ 3.14
    }
}