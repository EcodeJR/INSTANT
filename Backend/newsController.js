import Newslatter from './newslatter';

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