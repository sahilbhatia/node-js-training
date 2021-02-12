
const db = require('./sequel');
const users = db.users;
exports.create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
            message: "The email cant be empty!"
        });

    }
    const user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    };

    users.create(user).then(data => {
        res.send(data);
    }).catch(err => {

        res.status(500).send({

            messsage: "Internal server error"
        })
    })


};
exports.findAll = (req, res) => {

    users.findAll({}).then(data => {

        res.json(data);
    }).catch(err => {

        res.status(500).send({

            message: "Internal server error in retieving all user details"
        })

    })
}

exports.findOne = (req, res) => {
    const key = req.params.email;
    users.findByPk(key).then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {

        res.status(500).send({
            message: "error in retriving the user"
        })
    })

}

exports.update = (req, res) => {
    const key = req.params.email;
    users.update(req.body,
        { returning: true, where: { email: key } }
    ).then(([rowsUpdated, [updatedData]]) => {

        res.json(updatedData);
    })

}

exports.delete = (req, res) => {
    const key = req.params.email;
    users.destroy({ where: { email: key } })
        .then(number => {
            if (number == 1) {
                res.send({
                    message: "User Deleted Successfully"
                })
            }
            else {
                res.send({
                    message: "cannot find the email of the user "
                })
            }
        }).catch(err => {

            res.status(500).send({
                message: "could not delete the user due to internal server error"
            });
        })

}
