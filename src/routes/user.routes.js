import {Router} from "express";
import {createProject, allProjects, projectDetail} from "../controller/user.controller.js";

export const router = Router();

router.post("/project", createProject);
router.get("/all-projects", allProjects);
router.get("/project/:entityId", projectDetail);