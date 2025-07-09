import { Router } from "express";
import { addBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controllers/book.controller";

const router = Router();

router.post('/' , addBook);
router.get('/' , getAllBooks);
router.get('/:id' , getBookById);
router.put('/:id' , updateBookById);
router.delete('/:id' , deleteBookById);

export default router;