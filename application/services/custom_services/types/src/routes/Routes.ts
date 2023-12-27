import { Request, Response, NextFunction } from "express";
import { typesController } from '../controller/typesController';


export class Routes {
    private types: typesController = new typesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/types/:id').delete(this.types.GpDelete);
app.route('/types/get/search').get(this.types.GpSearch);
app.route('/types/get/update').put(this.types.GpSearchForUpdate);
app.route('/types').put(this.types.GpUpdate);
app.route('/types/:id').get(this.types.GpGetEntityById);
app.route('/types').get(this.types.GpGetAllValues);
app.route('/types').post(this.types.GpCreate);
app.route('/types/get/searchrelationship').get(this.types.GpSearchRelationship);
app.route('/types/userid/created_by').get(this.types.GpGetNounCreatedBy);
     }

}