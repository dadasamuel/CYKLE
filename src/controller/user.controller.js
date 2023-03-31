import { userRepository } from "../models/user.model.js";

export const createProject = async (req, res) => {
    try {
        const { companyName, personName, companyEmail, briefOfProject, phoneNumber } = req.body;
        // to validate user detail
        if (!(companyName && personName && companyEmail && briefOfProject && phoneNumber)) {
            return res.status(401).json({
                message: "All fields are required"
            })
        }
        const addClient = await userRepository.createAndSave({
            companyName, personName, companyEmail, briefOfProject, phoneNumber
        })
        return res.status(201).json({
            status:"Success",
            message: `${companyName} data saved successfully`,
            addClient
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

export const allProjects = async (req, res) => {
    try {
        const users = await userRepository.search().return.all()
        return res.status(200).json({
           users
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

export const projectDetail = async (req, res) => {
    const {entityId } = req.params;
    try {
        const newProjectDetail = await userRepository.fetch(entityId);
        return res.status(200).json({
         data: newProjectDetail
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}