var userDAO = require('../dbo/userDao.js');

function responseBadRequest(response, err) {
    response.status(405);
    response.send(err);
}


module.exports.getAllListType = function (req, res) {
    userDAO.getListTypes(function (err, result) {
        console.log(result);
        if (err || result.data[0] == null) {
            responseBadRequest(res, err);
        } else {
            response.status(200);
            response.send(result);
        }
    });
};