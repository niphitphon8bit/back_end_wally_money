require('dotenv').config();
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

var mysql = require('mysql')
var db = mysql.createConnection({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

db.connect((err) => {
    if (err) throw err;
    console.log("connected")
})

app.listen(3000, () => {
    console.log('Start server at port 3000.');
});

// account 
app.get('/account', (req, res) => {
    let sql = 'SELECT * FROM t5w_account;'
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})

app.post('/account_insert/', (req, res) => {

    let sql = `INSERT INTO t5w_account( ac_username, ac_password) 
    VALUES ("${req.body.ac_username}", "${req.body.ac_password}");`;

    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.delete('/account_delete/:id', (req, res) => {
    let sql = `DELETE FROM t5w_account WHERE ac_id = ${req.params.id};`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})


app.put('/account_update/:id', (req, res) => {

    let sql = `UPDATE t5w_account SET ac_fname = "${req.body.ac_fname}",ac_lname = "${req.body.ac_lname}", WHERE ac_id = ${req.params.id}  ;`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})


//end account




//login
app.post('/get_account_login/', (req, res) => {
    let sql = `SELECT * FROM t5w_account
    WHERE ac_username =  "${req.body.ac_username}"  AND ac_password ="${req.body.ac_password}"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

//end login

//register
app.post('/account_regisCheck/', (req, res) => {
    let sql = `select *
    from t5w_account
    where ac_username = "${req.body.ac_username}";`;

    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})


app.post('/account_regis/', (req, res) => {
    let sql = `INSERT INTO t5w_account(ac_username, ac_password,ac_fname,ac_lname) 
    VALUES ("${req.body.ac_username}", "${req.body.ac_password}","${req.body.ac_fname}","${req.body.lname}");`;

    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

//end register

// Transaction_type by Thutsaneeya
app.get('/transaction_type', (req, res) => {
    let sql = 'SELECT * FROM t5w_transaction_type;'
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})

app.get('/transaction_type_by_key/:id', (req, res) => {
    let sql = `SELECT * FROM t5w_transaction_type WHERE type_id =  ${req.params.id};`
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})
app.post('/transaction_type_insert/', (req, res) => {
    let sql = `INSERT INTO t5w_transaction_type(type_name) 
    VALUES ("${req.body.type_name}");`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.delete('/transaction_type_delete/:id', (req, res) => {
    let sql = `DELETE FROM t5w_transaction_type WHERE type_id = ${req.params.id};`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.put('/transaction_type_update/:id', (req, res) => {
    let sql = `UPDATE t5w_transaction_type SET type_name = "${req.body.type_name}" where type_id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
//end transaction_type

// Transaction by Nattamanat
app.get('/transaction', (req, res) => {
    let sql = 'SELECT * FROM t5w_transaction;'
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})
app.get('/transaction_by_key/:id', (req, res) => {
    let sql = `SELECT * FROM t5w_transaction WHERE ts_id =  ${req.params.id};`
    let query = db.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})
app.post('/transaction_insert/', (req, res) => {
    let sql = `INSERT INTO t5w_transaction(ts_name,ts_cost,ts_date,ts_detail,ts_category,ts_type_id,ts_ac_id) 
    VALUES ("${req.body.ts_name}","${req.body.ts_cost}","${req.body.ts_date}","${req.body.ts_detail}","${req.body.ts_category}",${req.body.ts_type_id},${req.body.ts_ac_id});`;

    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
app.delete('/transaction_delete/:id', (req, res) => {
    let sql = `DELETE FROM t5w_transaction WHERE ts_id = ${req.params.id};`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
app.put('/transaction_update/:id', (req, res) => {
    let sql = `UPDATE t5w_transaction SET ts_name = "${req.body.ts_name}",
                                                ts_cost = ${req.body.ts_cost},
                                                ts_date = "${req.body.ts_date}",
                                                ts_detail = "${req.body.ts_detail}",
                                                ts_category ="${req.body.ts_category}",
                                                ts_type_id  = ${req.body.ts_type_id},
                                                ts_ac_id = ${req.body.ts_ac_id} where ts_id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})


app.get('/get_ten_transaction_by_ac_id/:id', (req, res) => {
    let sql = ` SELECT * 
    FROM t5w_account 
    LEFT JOIN t5w_transaction 
    ON t5w_account.ac_id = t5w_transaction.ts_ac_id 
    WHERE ac_id = ${req.params.id} 
    ORDER BY  t5w_transaction.ts_date DESC  LIMIT 10`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.get('/get_all_transaction_by_ac_id/:id', (req, res) => {
    let sql = ` SELECT * 
    FROM t5w_account 
    LEFT JOIN t5w_transaction 
    ON t5w_account.ac_id = t5w_transaction.ts_ac_id 
    WHERE ac_id = ${req.params.id} 
    ORDER BY  t5w_transaction.ts_date DESC`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.get('/get_sum_revenue_by_ac_id/:id', (req, res) => {
    let sql = `SELECT SUM(ts_cost) as balance
    FROM t5w_account 
    LEFT JOIN t5w_transaction 
    ON t5w_account.ac_id = t5w_transaction.ts_ac_id 
    WHERE ac_id = ${req.params.id}  AND ts_category = "R"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.get('/get_sum_expend_by_ac_id/:id', (req, res) => {
    let sql = `SELECT SUM(ts_cost) as balance
    FROM t5w_account 
    LEFT JOIN t5w_transaction 
    ON t5w_account.ac_id = t5w_transaction.ts_ac_id 
    WHERE ac_id = ${req.params.id}  AND ts_category = "E"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
app.get('/get_year_month_history_by_ac_id/:id', (req, res) => {
    let sql = ` SELECT DISTINCT YEAR(ts_date) as year, MONTH(ts_date) as month 
                FROM t5w_transaction
                LEFT JOIN t5w_account 
                ON t5w_account.ac_id = t5w_transaction.ts_ac_id  
                WHERE t5w_transaction.ts_ac_id = ${req.params.id}
                GROUP BY ts_date DESC`
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

// account_get_history
app.get('/account_get_history/:ts_ac_id/:ts_year/:ts_month', (req, res) => {
    let sql = `SELECT * , SUM(if(ts_category = 'R',1,0)) as R,SUM(if(ts_category = 'E',1,0)) as E FROM t5w_transaction
    WHERE ts_ac_id = ${req.params.ts_ac_id} AND MONTH(ts_date) ="${req.params.ts_month}" AND YEAR(ts_date)  ="${req.params.ts_year}"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

app.get('/account_get_history_transaction_type/:ts_ac_id/:ts_year/:ts_month', (req, res) => {
    let sql = `SELECT * , SUM(if(ts_type_id = '1',1,0)) as entertain ,SUM(if(ts_type_id = '2',1,0)) as general, SUM(if(ts_type_id = '3',1,0)) as food FROM t5w_transaction
    WHERE ts_ac_id = ${req.params.ts_ac_id} AND MONTH(ts_date) ="${req.params.ts_month}" AND YEAR(ts_date)  ="${req.params.ts_year}"`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

// transaction_get_history_between_date_by
app.post('/transaction_get_history_between_date_by_account_key/', (req, res) => {
    let sql = `SELECT * FROM t5w_transaction WHERE ts_ac_id = '${req.body.ts_ac_id}' AND DATE(ts_date) BETWEEN '${req.body.ts_date_start}' AND '${req.body.ts_date_end}' ORDER BY ts_date DESC;`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

// transaction_get_history_between_date_by
app.post('/get_transaction_this_month/', (req, res) => {
    let sql = `SELECT * FROM t5w_transaction
    WHERE ts_ac_id =  ${req.body.ts_ac_id}  AND MONTH(ts_date) ="${req.body.ts_month}" 
    ORDER BY  t5w_transaction.ts_date DESC`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
app.post('/get_transaction_this_day/', (req, res) => {
    let sql = `SELECT * FROM t5w_transaction
    WHERE ts_ac_id =  ${req.body.ts_ac_id}  AND DAY(ts_date) ="${req.body.ts_day}"
    ORDER BY  t5w_transaction.ts_date DESC`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})

//end dev
// transaction_edit function by thutsaneeya
app.put('/transaction_edit/:id', (req, res) => {
    let sql = `SELECT * 
               FROM t5w_transaction 
               WHERE ts_id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})
    //end transaction_edit function