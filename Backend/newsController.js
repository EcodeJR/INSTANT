import Newslatter from './newslatter';

const newslatter_index = (req, res) => {
    Newslatter.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('/', { emails: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const newslatter_create = (req, res) => {
    const news = new Newslatter(req.body);

    news.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    newslatter_index,
    newslatter_create,
};