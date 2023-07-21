const express = require('express');
const mysql = require('mysql');

const app = express();

// 데이터베이스 연결 설정
Class.forName("kr.co.realtimetech.kairos.jdbc.kairosDriver");
const con = DriverManager.getConnection(
    "jdbc:kairos:// localhost:5000/ETRI", "root", "root");

// 데이터베이스 연결
con.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to the database');
  }
});

// CORS 허용 설정
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 데이터베이스에서 노드 데이터 가져오기
app.get('/node/all', (req, res) => {
  connection.query('SELECT * FROM node', (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).json({ error: 'Error executing query' });
    } else {
      res.json(results);
      console.log('json parsing success');
    }
  });
});

app.get('/nodem/all', (req, res) => {
  connection.query('SELECT * FROM nodem', (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).json({ error: 'Error executing query' });
    } else {
      res.json(results);
      console.log('json parsing success');
    }
  });
});

app.get('/link/all', (req, res) => {
  connection.query('SELECT * FROM link', (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).json({ error: 'Error executing query' });
    } else {
      res.json(results);
      console.log('json parsing success');
    }
  });
});

app.get('/linkm/all', (req, res) => {
  connection.query('SELECT * FROM linkm', (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).json({ error: 'Error executing query' });
    } else {
      res.json(results);
      console.log('json parsing success');
    }
  });
});

// 서버 시작
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
