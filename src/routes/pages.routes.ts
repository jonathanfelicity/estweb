import { Router } from "express";
import { Routes } from "interfaces";
import PagesController from "../controllers/pages.controller";



class PagesRoutes implements Routes {
    public path = '/'
    public router = Router()
    public pagesController = new PagesController()

    constructor() {
        this.initializeRoutes();
      }


    private initializeRoutes() {
        this.router.get(`${this.path}`, this.pagesController.home)
        
    }

}



export default PagesRoutes