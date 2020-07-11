
import{express}  from 'express';
const app = express();
const router = app.Router();

router.get('/',(req,res)=>{
    res.send('hello user');

})
export default router