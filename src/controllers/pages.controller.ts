import { NextFunction, Request, Response } from "express";


class PagesController{
    public home = (req: Request, res: Response, next: NextFunction)=>{
        return res.render('pages/home.ejs', {title:"Home"})
    }


    public listings = (req: Request, res: Response, next: NextFunction)=>{
        return res.render('pages/listings.ejs', {title: "Listings"})
    }

    public agents = (req: Request, res: Response, next: NextFunction)=>{
        return res.render('pages/agents.ejs', {title: "Agents"})
    }

    public about = (req: Request, res: Response, next: NextFunction)=>{
        return res.render('pages/about.ejs', {title: "About"})
    }


    public contact = (req: Request, res: Response, next: NextFunction)=>{
        return res.render('pages/contact.ejs', {title: "Contact"})
    }
    
}


export default PagesController