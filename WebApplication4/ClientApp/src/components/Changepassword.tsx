import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import AccountSidebar from './AccountSidebar'
import { alpha } from '@material-ui/core';
import { Modal, Form, Input, notification } from 'antd'
const nodemailer = require('nodemailer')
class Changepassword extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <AccountSidebar />
                    </div>
                    <div className='col-8'>
                        <div>
                            <form action="/" method="get">
                                Verification Code: <input type="text" name=""  />
                                <input id="clickMe" type="button" value="get verification code" onClick={send} />
                                <input id="clickMe" type="button" value="submit" onClick={checkverfy} />
                            </form>
                        </div>
                        <form action="/" method="get">
                            New Password: < input type="password" name="password"  />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
var num = 0;
function checkverfy() {
    
}
function verificationcode() {
    let str = "";
    for (var i = 0; i < 5; i++) {
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
}
export default connect()(Changepassword);

