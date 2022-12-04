const keyTranslations = {
    name: "ime",
    surname: "prezime",
    college: "fakultet",
    major: "smjer",
    year: "akademsku godinu",
    email: "email",
    username: "korisničko ime",
    password: "lozinku",
};

const handleKeyTranslation = (key) => {
    return keyTranslations[key];
};

const propsTranslations = {
    name: "ime",
    surname: "prezime",
    college_id: "fakultet_id",
    major: "fakultet_tecaj",
    year: "godina",
    email: "email",
    username: "korisnicko_ime",
    password: "lozinka",
    specialization: "specijalizacija",
    mentor: "mentor",
    phone: "telefon",
    address: "adresa",
    technologies: "tehnologije",
    image: "slika",
    courses: "tecajevi",
};

const handleAddUserToDb = (data, role) => {
    console.log(data);
    const columns = Object.keys(data).map((key) => propsTranslations[key]);
    const values = Object.values(data);
    console.log(role);
    fetch(
        `http://localhost:4000/adduser?columns=${columns}&values=${values}&role=${role}`
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => error);
};

const handleUpdateUser = (data, role) => {
    const id = data.id;
    delete data.id;

    const columns = Object.keys(data);
    const values = Object.values(data);

    let sql = `UPDATE ${role} SET `;

    columns.forEach((column, i) => {
        console.log(i, columns.length);
        let line = `${column} = '${values[i]}'`;
        const islast = i == columns.length - 1;
        console.log(islast);
        const spacing = i == columns.length - 1 ? `` : `, `;
        line += spacing;
        sql += line;
    });

    sql += ` WHERE id = '${id}'`;

    fetch(`http://localhost:4000/updateuser?sql=${sql}`);
};

const handleAddRequestToDb = (data) => {
    const columns = Object.keys(data);
    const values = Object.values(data);
    console.log(
        `http://localhost:4000/addrequest?columns=${columns}&values=${values}&role=zahtjev`
    );
    fetch(
        `http://localhost:4000/addrequest?columns=${columns}&values=${values}&role=zahtjev`
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => error);
};

export {
    handleKeyTranslation,
    handleAddUserToDb,
    handleUpdateUser,
    handleAddRequestToDb,
};
