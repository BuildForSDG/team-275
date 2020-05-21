import {EducationProvider} from './../models/ep';
 /**
   * Add new education provider.
   *
   * @public
   *
   * @method
   * @param - education provider
   * @param - userId
   *
   * @return {Object}        - express http response object
   */
export default class EducationProviderController {
    
    async addEducationProvider(eduProviderModel, userIdModel) {
         let eduProvider = await EducationProvider.findOne({ userId: userIdModel });
         if (eduProvider) {
             throw new Error('Education Provider already exists!');
         }
        eduProvider = new EducationProvider(eduProviderModel);
        eduProvider.userId = userIdModel;
        return await eduProvider.save();
    }
}