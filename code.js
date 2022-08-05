class Person{

    constructor(firstName,lastName,age){
    
    this.firstName=firstName;
    
    this.lastName=lastName;
    
    this.age=age;
    
    }
    
    }
    
    function display(){
    
    let per=new Person(document.form.firstName.value,document.form.lastName.value,document.form.age.value);
    
    console.log(per);
    
    alert(JSON.stringify({"FirstName":per.firstName,"LastName":per.lastName,"Age":per.age}));
    
    }
