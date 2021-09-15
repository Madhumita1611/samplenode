let express = require('express');
const { concat } = require('lodash');
let basic = express.Router();
const _ = require('lodash')

basic.get("/team",
    (req, res) => {

        let db = {
            "team1": {
                "name": "chennaisuperkings",
                "players": 11,
                "title": "cricket"
            },
            "team2": {
                "name": "mumbai",
                "players": 9,
                "title": "cricket"
            },
            "team3": {
                "name": "singapore",
                "players": 10,
                "title": "cricket"
            }
        }
        let a = [
            {
                "id": "team1",
                "win": 1,
                "lose": 2
            },
            {
                "id": "team2",
                "win": 3,
                "lose": 4
            },
            {
                "id": "team3",
                "win": 5,
                "lose": 6
            }
        ]
        let merged = [];

        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length; j++) {
                // console.log("thfggg")
                if (req.query.team[i] == a[j].id) {
                    // Object.assign(db[req.query.team[i]], a[i])
                    merged.push({
                        ...db[req.query.team[i]],
                        ...a[i]
                    });
                }
            }

        }
        res.send(merged).status(200)

        // let mad;
        // let ans = "";
        // for (let i = 0; i < Object.keys(req.query.team).length; i++) {
        //     // if (i == Object.keys(req.query.team).length - 1) {
        //     //     mad = db[req.query.team[i]].players
        //     //     ans = ans + mad

        //     // } else {
        //         mad = db[req.query.team[i]].players
        //         ans = ans + mad + " "
        //     // }

        // }
        // ans=  ans.trim()
        // res.send(ans).status(200)
        //   res.send(mad.join(" ")).status(200)
        //     if (value.name == req.params.name) {
        //         ans = 1;
        //         let mad = value;
        //     }

        // })
        // if (ans == 1) {
        //     res.send(mad).status(200)
        // }
        // else {
        //     res.send("invalid").status(200)
        // }


        // _.map(db.forEach((value, keys) => {
        //     console.log(object.values)

        // }))
    })
module.exports = basic

