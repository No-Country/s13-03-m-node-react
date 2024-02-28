import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
    deleteDocument,
} from '../config/factory.js';

import EvaluationModel from '../models/evaluationModel.js';

class EvaluationManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.getAllDocuments = getAllDocuments;
        this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createEvaluation(data) {
        const evaluation = EvaluationModel(data);
        const newevaluation = await this.createDocument('evaluationsCollection', evaluation);
        return newevaluation;
    }

    async getAllEvaluations(query,select ,populate) {
        const evaluations = await this.getAllDocuments('evaluationsCollection', query);
        return evaluations;
    }

    async updateEvaluation(filter, dataUpdate) {
        const evaluation = await this.updateDocument('evaluationsCollection', filter, dataUpdate);
        return evaluation;
    }

    async deleteEvaluation(query) {
        const evaluation = await this.deleteDocument('evaluationsCollection', query);
        return evaluation;
    }
}

export default EvaluationManager;