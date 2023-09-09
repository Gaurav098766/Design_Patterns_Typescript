// chair,table,coffetable --> victorian, english and german variants


// interface of the furniture
interface Furniture{
    chair() : AbstractProductA;
    Table() : AbstractProductB;
    CoffeeTable():AbstractProductC;
}

// Furniture variants inherting methods of Furniture
class VictorianFurniture implements Furniture {
    public chair(): AbstractProductA {
        return new chairA1();
    }

    public Table(): AbstractProductB {
        return new TableB1();
    }

    public CoffeeTable(): AbstractProductC {
        return new CoffeeTableC1();
    }
}


class GermanFurniture implements Furniture{
    public chair():AbstractProductA {
        return new chairA2();
    }

    public Table():AbstractProductB {
        return new TableB2();
    }

    public CoffeeTable(): AbstractProductC {
        return new  CoffeeTableC2(); 
    }
}

class EnglishFurniture implements Furniture{
    public chair():AbstractProductA {
        return new chairA3();
    }

    public Table():AbstractProductB {
        return new TableB3();
    }

    public CoffeeTable(): AbstractProductC {
        return new CoffeeTableC3(); 
    }
}

// implementing base interface of products i.e chairs, table and coffeetable

// For chair
interface AbstractProductA{
    usefulfuncA():string;
}

// For abstractProductA
class chairA1 implements AbstractProductA{
    public usefulfuncA(): string {
        return 'The result of product chairA1'    
    }
}

class chairA2 implements AbstractProductA{
    public usefulfuncA(): string {
        return 'The result of product chairA2'    
    }
}

class chairA3 implements AbstractProductA{
    public usefulfuncA(): string {
        return 'The result of product chairA3'    
    }
}

//For table
interface AbstractProductB{
    usefulfuncB():string;
}

class TableB1 implements AbstractProductB{
    public usefulfuncB(): string {
        return 'The result of product TableB1'    
    }
}

class TableB2 implements AbstractProductB{
    public usefulfuncB(): string {
        return 'The result of product TableB2'    
    }
}

class TableB3 implements AbstractProductB{
    public usefulfuncB(): string {
        return 'The result of product TableB3'    
    }
}

// For coffeetable
interface AbstractProductC{
    usefulfuncC():string;
}

class CoffeeTableC1 implements AbstractProductC{
    public usefulfuncC(): string {
        return 'The result of product coffeetableC1'    
    }
}

class CoffeeTableC2 implements AbstractProductC{
    public usefulfuncC(): string {
        return 'The result of product coffeetableC2'    
    }
}

class CoffeeTableC3 implements AbstractProductC{
    public usefulfuncC(): string {
        return 'The result of product coffeetableC3'    
    }
}

function clientCode(factory: Furniture) {
    const productA = factory.chair();
    const productB = factory.Table();
    const productC = factory.CoffeeTable();

    console.log(productA.usefulfuncA());
    console.log(productB.usefulfuncB());
    console.log(productC.usefulfuncC());
    // console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the first factory type...');
clientCode(new VictorianFurniture());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new GermanFurniture());

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new EnglishFurniture());