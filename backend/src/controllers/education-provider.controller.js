import { EducationProvider } from '../models/ep';
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
    this.eduProvider = await EducationProvider.findOne({ userId: userIdModel });
    if (this.eduProvider) {
      throw new Error('Education Provider already exists!');
    }
    this.eduProvider = new EducationProvider(eduProviderModel);
    this.eduProvider.userId = userIdModel;
    return this.eduProvider.save();
  }
}
