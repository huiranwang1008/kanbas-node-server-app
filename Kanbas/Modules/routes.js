import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.send(status);
  });
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
  
    // 调用 DAO 获取对应课程的模块数据
    const modules = await modulesDao.findModulesByCourseId(courseId);
  
    if (modules.length > 0) {
      res.json(modules); // 返回模块数据
    } else {
      res.status(404).send(`No modules found for course ${courseId}`);
    }
  });
}

