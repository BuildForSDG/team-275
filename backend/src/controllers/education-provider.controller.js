import { Mongoose } from 'mongoose';

 /**
   * Add new education provider.
   *
   * @public
   *
   * @method
   *
   * @param  {Object}   req  - express http request object
   * @param  {Object}   res  - express http response object
   * @param  {Function} next - calls th enect middleware in the stack
   *
   * @return {Object}        - express http response object
   */
export default class EducationProvider {
    
    async addEducationProvider(educationProviderModel, userId) {
         let eduProvider = await EducationProvider.findOne(userId);
         if (eduProvider) {
             throw new Error('Education Provider already exists!');
         }
        eduProvider.userId = userId;
        eduProvider = new EducationProvider(educationProviderModel);
        return await eduProvider.save();
    }
}