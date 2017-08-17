/**
 * Created by syzx9801@163.com on 2017/6/12.
 */
var fs = require('fs'),
    superagent = require('superagent'),
    cheerio = require('cheerio'),
    request = require('request'),
    express = require('express')
    app = express();

var url = 'http://cha.17173.com/hs/info/card_zhcn/448';
var cardArray = [];



superagent.get(url).end(function (err, res) {
    var $ = cheerio.load(res.text);
    var detail = $('.hero_detail_img_alt');         //卡牌说明
    var article = $('.img_alt span');               //画师
    var cardname = $('.hero_detail_t');             //卡牌名称
    var Ecardname = $('.hero_detail_t span');             //卡牌英文名称
    var cardList = $('.hero_detail_property dl')    //卡牌详细
    console.log(cardList);
});

//JSON
[
    {
        cadename: '',
        ecardname: '',
        article: '',
        detail: '',
        cardList: {
            death:'',
            type: '',
            mounted:[],
        }
    }
]