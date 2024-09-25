<script>
    const myObj = {name: "MBS", age: 33, city: "Bitung"};
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
    console.log("myJSON");
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    document.getElementById("txt-name").innerHTML = "my name is"+obj.name;
    document.getElementById("txt-age").innerHTML = "my age is"+obj.age;
    document.getElementById("txt-city").innerHTML = "i live in"+obj.city;
</script>