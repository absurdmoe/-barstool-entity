// this file and folder are used to test the app locally on your computer
const barstool = require('../lib/');
const { BarstoolEntity } = barstool;
const mysql = require('mysql');

const conn = {
  host: 'localhost',
  port: 3306,
  database: 'moe',
  user: 'root',
  password: ''
};
const bEnt = new BarstoolEntity(conn, null, null, null);

if (bEnt.createServerAndRoutes) {
  bEnt.createServerAndRoutes();
} else {
  console.log(bEnt);
}
