import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello world!');
});

const indexRouter = router;
export default indexRouter;
