/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Project from './Project';
import ProjectProjectImage from './ProjectProjectImage';

/**
 * The Employee model module.
 * @module model/Employee
 * @version 1.0.0
 */
class Employee {
    /**
     * Constructs a new <code>Employee</code>.
     * @alias module:model/Employee
     * @param eName {String} 
     * @param eSurname {String} 
     * @param eImage {module:model/ProjectProjectImage} 
     * @param eProjects {Array.<module:model/Project>} 
     */
    constructor(eName, eSurname, eImage, eProjects) { 
        
        Employee.initialize(this, eName, eSurname, eImage, eProjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eName, eSurname, eImage, eProjects) { 
        obj['eName'] = eName;
        obj['eSurname'] = eSurname;
        obj['eImage'] = eImage;
        obj['eProjects'] = eProjects;
    }

    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employee} obj Optional instance to populate.
     * @return {module:model/Employee} The populated <code>Employee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Employee();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('eName')) {
                obj['eName'] = ApiClient.convertToType(data['eName'], 'String');
            }
            if (data.hasOwnProperty('eSurname')) {
                obj['eSurname'] = ApiClient.convertToType(data['eSurname'], 'String');
            }
            if (data.hasOwnProperty('eImage')) {
                obj['eImage'] = ProjectProjectImage.constructFromObject(data['eImage']);
            }
            if (data.hasOwnProperty('eProjects')) {
                obj['eProjects'] = ApiClient.convertToType(data['eProjects'], [Project]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Employee.prototype['_id'] = undefined;

/**
 * @member {String} eName
 */
Employee.prototype['eName'] = undefined;

/**
 * @member {String} eSurname
 */
Employee.prototype['eSurname'] = undefined;

/**
 * @member {module:model/ProjectProjectImage} eImage
 */
Employee.prototype['eImage'] = undefined;

/**
 * @member {Array.<module:model/Project>} eProjects
 */
Employee.prototype['eProjects'] = undefined;






export default Employee;

