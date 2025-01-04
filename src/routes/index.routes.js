import {Router} from 'express'
import { ExpressHandlebars } from 'express-handlebars';
import Task from '../models/Task';


const router = Router();

router.get("/", async(req, res) => {
  // lean() para ver los objetos tipicos de javascript
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks});
});

router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }

});

router.get("/about", (req, res) => {
  res.render('about.hbs');
});

router.get("/edit", (req, res) => {
  res.render('edit.hbs');
});

router.post('/edit', (req, res)=>{
  res.send('edit')
})

export default router;
