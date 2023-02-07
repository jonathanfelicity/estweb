import express, { Express, Request, Response } from 'express';
import { PORT, NODE_ENV } from './config/env';
import expressLayouts from 'express-ejs-layouts';
import { Routes } from 'interfaces';
import { logger } from './utils'
import AppDataSource from "./config/db";


class App{
  public app: express.Application;
  public env: string;
  public port: string | number


  // public 
  constructor(routes: Routes[]){
    this.app = express()
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    AppDataSource.initialize()
      .then(()=>{
        this.app.listen(this.port, () => {
          logger.info(`⚡️=================================⚡️`);
          logger.info(`======= ENV: ${this.env} =======`);
          logger.info(`🚀 App listening on the port ${this.port} 🚀`);
          logger.info(`⚡️=================================⚡️`);
        });
      })
      .catch(e=>logger.error(e))
    
  }

  private initializeMiddlewares() {
    this.app.set('view engine', 'ejs');
    this.app.use(express.static('public'))
    this.app.use(expressLayouts)

  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }


  
}





export default App