const mssql = require("mssql");

// Database connect configuration
const dbconfig = {
    user: "aspira",
    password: "12345678",
    server: "DESKTOP-4T2KJSQ",
    database: "aspira",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    port: 49696,
};


const ROLES = ["admin", "profesor", "mentor", "student", "firma"];

// Login function - destructuring req.query and posting request to database query
const handleLogin = async (req, res, role = ROLES[0]) => {
    const { username, password } = req.query;

    const SQL = `SELECT * FROM ${role} WHERE korisnicko_ime = '${username}'`;

    await mssql.connect(dbconfig);
    const request = new mssql.Request();

    request.query(SQL, (error, result) => {
        error ? res.json({ error }) : null;
        const { recordset: rawdata } = result;
        const [userdata] = rawdata;
        if (userdata) {
            userdata.role = role;
            res.json(
                userdata.lozinka == password
                    ? userdata
                    : { error: "WRONG_PASSWORD" }
            );
        } else {
            if (ROLES.indexOf(role) == ROLES.length - 1) {
                res.json({ error: "NO_USER_FOUND" });
                return;
            }
            handleLogin(req, res, ROLES[ROLES.indexOf(role) + 1]);
        }
    });
};

// Formating passed values from [val1, val2, val3] to "val1, val2, val3"
const formatValues = (values) => {
    const valuesArr = values.split(`,`);

    let SQLvalues = "";
    valuesArr.forEach((value, i) => {
        value = `'${value}'`;
        SQLvalues += value;
        if (i + 1 < valuesArr.length) SQLvalues += ",";
    });

    return SQLvalues;
};

// Fetching wanted type of users from db
const fetchUsers = async (req) => {
    const { role, id } = req.query;
    console.log(role, id);
    const SQL = `SELECT * FROM ${role}` + (id ? ` WHERE id = ${id}` : ``);

    await mssql.connect(dbconfig);
    const request = new mssql.Request();

    const result = await request.query(SQL);
    const { recordset: rawdata } = result;

    return rawdata;
};

// Selecting size of all tables to get number of each type of users to display in dashboard
const getSize = async (role) => {
    const SQL = `SELECT (SELECT COUNT(*) FROM student) AS broj_studenata,
    (SELECT COUNT(*) FROM profesor) AS broj_profesora,
    (SELECT COUNT(*) FROM mentor) AS broj_mentora,
    (SELECT COUNT(*) FROM firma) AS broj_firmi,
    (SELECT COUNT(*) FROM fakultet) AS broj_fakulteta`;

    await mssql.connect(dbconfig);
    const request = new mssql.Request();

    const result = await request.query(SQL);
    const { recordset: rawdata } = result;

    return rawdata;
};

// Exporting functions
module.exports = { handleLogin, formatValues, fetchUsers, getSize };
