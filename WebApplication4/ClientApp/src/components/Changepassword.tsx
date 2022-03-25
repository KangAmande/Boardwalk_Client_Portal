import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import Accountsidebar from './Accountsidebar';
import { Modal, Form, Input, notification } from 'antd';
import nodemailer from 'nodemailer';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "insurance-rdb.cdgtmz3zqcy1.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Mohawk123"
});
connection.connect(function (err) {
    if (err) throw err;
    alert("db connected");
});
class Changepassword extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Accountsidebar />
                    </div>
                    <div className='col-8'>
                        <div>
                            <form action="/" method="get">
                                New Password: < input id="newpwd" type="password" name="password" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div>
                            Verification Code:
                            <form action="/" method="get">
                                <input id="inputcode" type="text" name="inputcode"/>
                                <input id="sendcode" type="button" value="sendcode" onClick={send} />
                                <input id="checkcode" type="button" value="checkcode" onClick={checkverfy} />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
var num = 0;
function checkverfy() {
    var userinput = (document.getElementById("inputcode") as HTMLInputElement).value;
    alert(parseInt(userinput)==num);
}
function verificationcode() {
    let str = "";
    for (var i = 0; i < 4; i++) {
        str += Math.round(Math.random() * 9);
    }
    num = Math.round(parseInt(str));
}

function send() {

    verificationcode();
    const config = {
        host: 'smtp.qq.com',
        port: 465,
        auth: {
            user: "694210383@qq.com",
            pass: "eogjnyohbevibbaj"
        }
    }
    const transporter = nodemailer.createTransport(config)

    const mail = {
        from: 'huang <694210383@qq.com>',
        subject: 'verify code',
        to: 'jackhuang0330@gmail.com',
        text: num,
    };
    transporter.sendMail(mail, (error: any, info: { response: any; }) => {
        if (error) {
            return console.log(error);
        }
        transporter.close()
        console.log('mail sent:', info.response)
    });
    alert(num);
}
export default connect()(Changepassword);

