import { Institution } from '../models/institution';
/**
 * Add a new Instution.
 *
 * @public
 *
 * @method
 * @param - education provider
 * @param - userId
 *
 * @return {Object}        - express http response object
 */
export default class InstitutionController {
  async addInstution(institutionModel, userIdModel) {
    this.institution = await Institution.findOne({ userId: userIdModel });
    if (this.institution) {
      throw new Error('Institution already Exists!');
    }
    this.institution = new Institution(institutionModel);
    this.institution.userId = userIdModel;
    return this.institution.save();
  }
}
