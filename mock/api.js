const crashType = {
    "code": 1,
    "data": {
        "name": "category",
        "total": 5679,
        "rate": 100,
        "depiction": "分类列表",
        "children": [
            {
                "name": "foreground",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "0",
                        "total": 2942,
                        "rate": 51.8049,
                    },
                    {
                        "name": "1",
                        "total": 2879,
                        "rate": 50.6955,
                    }
                ]
            },
            {
                "name": "model",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "15Plus",
                        "total": 1,
                        "rate": 0.0176,
                    },
                    {
                        "name": "16s",
                        "total": 2,
                        "rate": 0.0352,
                    },
                    {
                        "name": "16th",
                        "total": 2,
                        "rate": 0.0352,
                    },
                    {
                        "name": "16thPlus",
                        "total": 1,
                        "rate": 0.0176,
                    },
                    {
                        "name": "16X",
                        "total": 3,
                        "rate": 0.0528,
                    },
                    {
                        "name": "A33",
                        "total": 7,
                        "rate": 0.1233,
                    }
                ]
            },
            {
                "name": "device_name",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "null",
                        "total": 5821,
                        "rate": 102.5004,
                    }
                ]
            },
            {
                "name": "product_brand",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "null",
                        "total": 5821,
                        "rate": 102.5004,
                    }
                ]
            },
            {
                "name": "os_version",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "10",
                        "total": 696,
                        "rate": 12.2557,
                    },
                    {
                        "name": "5.0",
                        "total": 4,
                        "rate": 0.0704,
                    },
                    {
                        "name": "5.0.1",
                        "total": 3,
                        "rate": 0.0528,
                    },
                    {
                        "name": "5.0.2",
                        "total": 16,
                        "rate": 0.2817,
                    },
                    {
                        "name": "5.1",
                        "total": 145,
                        "rate": 2.5533,
                    },
                    {
                        "name": "5.1.1",
                        "total": 127,
                        "rate": 2.2363,
                    },
                    {
                        "name": "6.0",
                        "total": 296,
                        "rate": 5.2122,
                    },
                    {
                        "name": "6.0.1",
                        "total": 1006,
                        "rate": 17.7144,
                    },
                    {
                        "name": "7.0",
                        "total": 183,
                        "rate": 3.2224,
                    },
                    {
                        "name": "7.0.0",
                        "total": 1,
                        "rate": 0.0176,
                    },
                    {
                        "name": "7.1.1",
                        "total": 324,
                        "rate": 5.7052,
                    },
                    {
                        "name": "7.1.2",
                        "total": 85,
                        "rate": 1.4967,
                    },
                    {
                        "name": "8.0.0",
                        "total": 614,
                        "rate": 10.8118,
                    },
                    {
                        "name": "8.1.0",
                        "total": 609,
                        "rate": 10.7237,
                    },
                    {
                        "name": "9",
                        "total": 1711,
                        "rate": 30.1285,
                    },
                    {
                        "name": "9.0",
                        "total": 1,
                        "rate": 0.0176,
                    }
                ]
            },
            {
                "name": "dic",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "C011100011151",
                        "total": 1,
                        "rate": 0.0176,
                    },
                    {
                        "name": "C02110001002",
                        "total": 377,
                        "rate": 6.6385,
                    },
                ]
            },
            {
                "name": "so_hotfix",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "0",
                        "total": 5821,
                        "rate": 102.5004,
                    }
                ]
            },
            {
                "name": "illegal",
                "total": 0,
                "rate": 0,
                "children": [
                    {
                        "name": "0",
                        "total": 5821,
                        "rate": 102.5004,
                    }
                ]
            }
        ]
    },
    "message": "success"
}

const proxy = {
    'POST /amap/crashstat/crashType': crashType,
    // 'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
    // 'GET /api/user/list': [
    //   {id: 1, username: 'kenny', sex: 6 },
    //   {id: 2, username: 'kenny', sex: 6 }
    // ],
    // 'POST /api/login/account': (req, res) => {
    //   const { password, username } = req.body;
    //   if (password === '888888' && username === 'admin') {
    //     return res.send({
    //       status: 'ok',
    //       code: 0,
    //       token: "sdfsdfsdfdsf",
    //       data: {id: 1, username: 'kenny', sex: 6 }
    //     });
    //   } else {
    //     return res.send({status: 'error', code: 403 });
    //   }
    // },
    // 'DELETE /api/user/:id': (req, res) => {
    //   console.log('---->', req.body)
    //   console.log('---->', req.params.id)
    //   res.send({ status: 'ok', message: '删除成功！' });
    // }
}
module.exports = proxy;