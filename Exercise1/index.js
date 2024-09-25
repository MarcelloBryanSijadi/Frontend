<script>
    const text = '["semmy taju","wandi darea","recky ronga","dilben tulum"]';
    const myArr = JSON.parse(text);
    console.log(myArr);
    document.getElementById('demo3').innerHTML ="my name is "+myArr[0];
</script>