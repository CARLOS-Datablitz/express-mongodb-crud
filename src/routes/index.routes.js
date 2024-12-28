import {Router} from 'express'
import { ExpressHandlebars } from 'express-handlebars';
const router = Router()

router.get("/", (req, res) => {
  res.render('index.hbs');
});

router.post("/tasks/add", (req, res) => {
  console.log(req.body)
  res.send('Saved')
});


router.get("/about", (req, res) => {
  res.render('about.hbs');
});

router.get("/edit", (req, res) => {
  res.render('edit.hbs');
});


export default router;
