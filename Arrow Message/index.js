const message = () => {
    const Name = "Pendragon";
    const Age = "19";
    const Status = "Single";
    const Major = "Information System";
    const Faculty = "Computer Science";
    const Address = "Jl.Merdeka,No.14 Kutai";
    const Interest = "Hacker Anonymous";
    

    return `
        <h2>${Name}</h2>
        <h2>${Age}</h2>
        <h2>${Status}</h2>
        <h2>${Major}</h2>
        <h2>${Faculty}</h2>
        <h2>${Address}</h2>
        <h2>${Interest}</h2>
        <hr/>
        
        <hr />
        <ul>
            <li><strong> Jawaban:</strong> ${Name}<li>
            <li><strong> Jawaban:</strong> ${Age}<li>
            <li><strong> Jawaban:</strong> ${Status}<li>
            <li><strong> Jawaban:</strong> ${Major}<li>
            <li><strong> Jawaban:</strong> ${Faculty}<li>
            <li><strong> Jawaban:</strong> ${Address}<li>
            <li><strong> Jawaban:</strong> ${Interest}<li>
        </ul>
    `;
};

export default message;